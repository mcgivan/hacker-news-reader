import React from "react";

const ItemsList = ViewComponent => itemIds => {
  return itemIds && itemIds.length ? (
    itemIds.map(id => <ViewComponent key={id} id={id} />)
  ) : (
    null
  );
};

export default ItemsList;
