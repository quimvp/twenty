type TransformToString<T, Keys extends keyof T> = {
  [P in keyof T]: P extends Keys ? string : T[P];
};

// Overload for an array of T
export function transformMetadataForComparison<T, Keys extends keyof T>(
  fieldMetadataCollection: T[],
  options: {
    propertiesToIgnore?: readonly Keys[];
    propertiesToStringify?: readonly Keys[];
    keyFactory: (datum: T) => string;
  },
): Record<string, TransformToString<T, Keys>>;

// Overload for a single T object
export function transformMetadataForComparison<T, Keys extends keyof T>(
  fieldMetadataCollection: T,
  options: {
    propertiesToIgnore?: readonly Keys[];
    propertiesToStringify?: readonly Keys[];
  },
): TransformToString<T, Keys>;

export function transformMetadataForComparison<T, Keys extends keyof T>(
  metadata: T[] | T,
  options: {
    propertiesToIgnore?: readonly Keys[];
    propertiesToStringify?: readonly Keys[];
    keyFactory?: (datum: T) => string;
  },
): Record<string, TransformToString<T, Keys>> | TransformToString<T, Keys> {
  const propertiesToIgnore = (options.propertiesToIgnore ??
    []) as readonly string[];
  const propertiesToStringify = (options.propertiesToStringify ??
    []) as readonly string[];

  const transformProperties = (datum: T): TransformToString<T, Keys> => {
    const transformedField = {} as TransformToString<T, Keys>;

    for (const property in datum) {
      if (propertiesToIgnore.includes(property)) {
        continue;
      }
      if (
        propertiesToStringify.includes(property) &&
        datum[property] !== null &&
        typeof datum[property] === 'object'
      ) {
        const orderedValue = Object.fromEntries(
          Object.entries(datum[property] as Record<string, unknown>).sort(),
        );

        transformedField[property as string] = JSON.stringify(
          orderedValue,
        ) as T[Keys];
      } else {
        transformedField[property as string] = datum[property];
      }
    }

    return transformedField;
  };

  if (Array.isArray(metadata)) {
    return metadata.reduce<Record<string, TransformToString<T, Keys>>>(
      (acc, datum) => {
        const key = options.keyFactory?.(datum);

        if (!key) {
          throw new Error('keyFactory must be implemented');
        }

        acc[key] = transformProperties(datum);

        return acc;
      },
      {},
    );
  } else {
    return transformProperties(metadata);
  }
}
