import { useApolloClient } from '@apollo/client';
import { OnDragEndResponder } from '@hello-pangea/dnd';
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';

import { currentUserState } from '@/auth/states/currentUserState';
import { Favorite } from '@/favorites/types/Favorite';
import { useFindOneObjectMetadataItem } from '@/object-metadata/hooks/useFindOneObjectMetadataItem';

import { favoritesState } from '../states/favoritesState';

export const useFavorites = () => {
  const currentUser = useRecoilValue(currentUserState);
  const workspaceMemberId = currentUser?.workspaceMember?.id;

  const [favorites, setFavorites] = useRecoilState(favoritesState);

  const { updateOneMutation, createOneMutation, deleteOneMutation } =
    useFindOneObjectMetadataItem({
      objectNameSingular: 'favoriteV2',
    });

  const apolloClient = useApolloClient();

  const createFavorite = useRecoilCallback(
    ({ snapshot, set }) =>
      async (
        favoriteNameToCreate: string,
        favoriteIdToCreate: string,
        additionalData?: any,
      ) => {
        const favoritesStateFromSnapshot = snapshot.getLoadable(favoritesState);
        const favorites = favoritesStateFromSnapshot.getValue();
        if (!favoriteNameToCreate || !favoriteIdToCreate) {
          return;
        }

        const result = await apolloClient.mutate({
          mutation: createOneMutation,
          variables: {
            input: {
              [favoriteNameToCreate]: favoriteIdToCreate,
              position: favorites.length + 1,
              workspaceMember: workspaceMemberId,
            },
          },
        });

        const createdFavorite: Favorite = result?.data?.createFavoriteV2;

        const newFavorite = {
          ...additionalData,
          ...createdFavorite[favoriteNameToCreate],
        };

        if (createdFavorite) {
          set(favoritesState, [...favorites, newFavorite]);
        }
      },
    [apolloClient, createOneMutation, workspaceMemberId],
  );

  const _updateFavoritePosition = async (favorite: Favorite) => {
    const result = await apolloClient.mutate({
      mutation: updateOneMutation,
      variables: {
        data: {
          position: favorite?.position,
        },
        where: {
          id: favorite.id,
        },
      },
    });

    const updatedFavorite = result?.data?.updateFavoriteV2;
    if (updatedFavorite) {
      setFavorites(
        favorites.map((favorite) =>
          favorite.id === updatedFavorite.id ? updatedFavorite : favorite,
        ),
      );
    }
  };

  const deleteFavorite = useRecoilCallback(
    ({ snapshot, set }) =>
      async (favoriteIdToDelete: string) => {
        const favoritesStateFromSnapshot = snapshot.getLoadable(favoritesState);
        const favorites = favoritesStateFromSnapshot.getValue();
        const idToDelete = favorites.find(
          (favorite: Favorite) => favorite.recordId === favoriteIdToDelete,
        )?.id;

        await apolloClient.mutate({
          mutation: deleteOneMutation,
          variables: {
            idToDelete: idToDelete,
          },
        });

        set(
          favoritesState,
          favorites.filter((favorite: Favorite) => favorite.id !== idToDelete),
        );
      },
    [apolloClient, deleteOneMutation],
  );

  const computeNewPosition = (destIndex: number, sourceIndex: number) => {
    if (destIndex === 0) {
      return favorites[destIndex].position / 2;
    }

    if (destIndex === favorites.length - 1) {
      return favorites[destIndex - 1].position + 1;
    }

    if (sourceIndex < destIndex) {
      return (
        (favorites[destIndex + 1].position + favorites[destIndex].position) / 2
      );
    }

    return (
      (favorites[destIndex - 1].position + favorites[destIndex].position) / 2
    );
  };

  const handleReorderFavorite: OnDragEndResponder = (result) => {
    if (!result.destination || !favorites) {
      return;
    }
    const newPosition = computeNewPosition(
      result.destination.index,
      result.source.index,
    );

    const reorderFavorites = Array.from(favorites);
    const [removed] = reorderFavorites.splice(result.source.index, 1);
    const removedFav = { ...removed, position: newPosition };
    reorderFavorites.splice(result.destination.index, 0, removedFav);
    setFavorites(reorderFavorites);
    _updateFavoritePosition(removedFav);
  };
  return {
    favorites,
    createFavorite,
    deleteFavorite,
    handleReorderFavorite,
  };
};
