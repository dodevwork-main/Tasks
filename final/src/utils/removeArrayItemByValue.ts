const removeArrayItemByValue = <T>(argArray: T[], value: T): T[] => {
  const array = [...argArray];

  const index = array.indexOf(value);

  if (index > -1) {
    array.splice(index, 1);
  }

  return array;
};

export default removeArrayItemByValue;
