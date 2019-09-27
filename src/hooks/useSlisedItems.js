import { useState, useEffect } from "react";

const useSlisedItems = (items, currentPage, perPage) => {
  const [itemsOnPage, setItemsOnPage] = useState(
    items.slice(currentPage * perPage, (currentPage + 1) * perPage),
  );

  useEffect(() => {
    setItemsOnPage(
      items.slice(currentPage * perPage, (currentPage + 1) * perPage),
    );
  }, [items, perPage, currentPage]);

  return itemsOnPage;
};

export default useSlisedItems;
