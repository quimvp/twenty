#!/bin/bash

# Colors
RED=31
GREEN=32
BLUE=34

# Function to display colored output
function echo_header {
    COLOR=$1
    MESSAGE=$2
    echo -e "\e[${COLOR}m\n=======================================================\e[0m"
    echo -e "\e[${COLOR}m${MESSAGE}\e[0m"
    echo -e "\e[${COLOR}m=======================================================\e[0m"
}

# Function to handle errors
function handle_error {
    echo_header $RED "Error: $1"
    exit 1
}

cat << "EOF"
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@#*+=================@@@@@%*+=========++*%@@@@@@@
@@@@#-                   .+@@%=.                .+@@@@@
@@@-                   .*@@%-                     .#@@@
@@=     .=+++++++++++*#@@@=       -++++++++++-      %@@
@@.     %@@@@@@@@@@@@@@@+       =%@@@@@@@@@@@@=     +@@
@@.    .@@@@@@@@@@@@@@+.      -%@@@@@@@@@@@@@@+     +@@
@@.    .@@@@@@@@@@@@*.      -#@@#:=@@@@@@@@@@@=     +@@
@@      @@@@@@@@@@#:      :#@@#:  -@@@@@@@@@@@=     +@@
@@#====#@@@@@@@@#-      .*@@@=    -@@@@@@@@@@@=     +@@
@@@@@@@@@@@@@@%-      .*@@@@#     -@@@@@@@@@@@=     +@@
@@@@@@@@@@@@%=       +@@@@@@#     -@@@@@@@@@@@=     +@@
@@@@@@@@@@@+       =@@@@@@@@#     -@@@@@@@@@@@=     +@@
@@@@@@@@@+.      -%@@@@@@@@@#     -@@@@@@@@@@@=     +@@
@@@@@@@*.      -%@@@@@@@@@@@#     -@@@@@@@@@@@=     +@@
@@@@@#:      :#@@@@@@@@@@@@@#     -@@@@@@@@@@@+     +@@
@@@#:      :#@@@@@@@@@@@@@@@#     :@@@@@@@@@@@=     +@@
@@=       :+*+++++++++++*%@@@.     :+++++++++-      %@@
@@                       :@@@%.                   .#@@@
@@-                      :@@@@@+:               .+@@@@@
@@@#+===================+%@@@@@@@%*++=======++*%@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
EOF

echo_header $BLUE "                    DATABASE SETUP"

PG_MAIN_VERSION=15
PG_GRAPHQL_VERSION=1.4.2
CARGO_PGRX_VERSION=0.10.2

current_directory=$(pwd)

# Install PostgresSQL
echo_header $GREEN "Step [1/4]: Installing PostgreSQL..."

brew reinstall postgresql@$PG_MAIN_VERSION

# Install pg_graphql extensions
echo_header $GREEN "Step [2/4]: Installing GraphQL for PostgreSQL..."

# Uninstall existing Rust installation if found
existing_rust_path=$(which rustc)
if [ -n "$existing_rust_path" ]; then
    echo "Uninstalling existing Rust installation..."
    rm -rf "$existing_rust_path"
fi

# To force a reinstall of cargo-pgrx, pass --force to the command below
curl  https://sh.rustup.rs -sSf | sh
source "$HOME/.cargo/env"
cargo install --locked cargo-pgrx@$CARGO_PGRX_VERSION --force
cargo pgrx init --pg$PG_MAIN_VERSION download

# Create a temporary directory
temp_dir=$(mktemp -d)
cd "$temp_dir"
pwd

curl -LJO https://github.com/supabase/pg_graphql/archive/refs/tags/v$PG_GRAPHQL_VERSION.zip || handle_error "Failed to download pg_graphql package."

unzip pg_graphql-$PG_GRAPHQL_VERSION.zip

[[ ":$PATH:" != *":/opt/homebrew/opt/postgresql@$PG_MAIN_VERSION/bin:"* ]] && PATH="/opt/homebrew/opt/postgresql@$PG_MAIN_VERSION/bin:${PATH}"

cd "pg_graphql-$PG_GRAPHQL_VERSION"
cargo pgrx install --release --pg-config /opt/homebrew/opt/postgresql@$PG_MAIN_VERSION/bin/pg_config

# # Clean up the temporary directory
echo "Cleaning up..."
cd "$current_directory"

echo "Build complete in $temp_dir."
