export const formateDate = (date) => {
  const dateStr = new Date(date).toLocaleDateString("en-in", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return dateStr;
};

export const smallString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

export const removeItems = (array, id, setList) => {
  const List = [...array];
  const updatedList = List.filter((list) => list.id !== id);
  setList(updatedList);
};

export const calculatePrice = (array, setPrice) => {
  const Items = [...array];
  const totalPrice = Items.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0
  );
  setPrice(totalPrice);
};
