export const useMoveViewFields = () => {
  const handleColumnMove = <T extends { index: number }>(
    direction: 'left' | 'right',
    currentArrayindex: number,
    targetArray: T[],
  ) => {
    const targetArrayIndex =
      direction === 'left' ? currentArrayindex - 1 : currentArrayindex + 1;
    if (currentArrayindex >= 0 && targetArrayIndex >= 0) {
      const currentEntity = targetArray[currentArrayindex];
      const targetEntity = targetArray[targetArrayIndex];
      const newArray = [...targetArray];

      newArray[currentArrayindex] = {
        ...targetEntity,
        index: currentEntity.index,
      };
      newArray[targetArrayIndex] = {
        ...currentEntity,
        index: targetEntity.index,
      };
      return newArray;
    }

    return targetArray;
  };

  return { handleColumnMove };
};
