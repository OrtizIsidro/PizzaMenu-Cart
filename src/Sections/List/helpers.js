export const MIXED_ITEMS = ["Mitad y mitad", "4 Gustos"];
export const AMOUNT_OF_MIXED_ITEMS = {
  "Mitad y mitad": 2,
  "4 Gustos": 4,
};
export const getCategory = (item, category, callback) => {
  if (item.category !== category) return item;
  return {
    ...item,
    items: callback(item.items),
  };
};
