import React from "react";
import Loader from "./Loader/Loader";

const ItemsList = ViewComponent => itemIds => {
  return itemIds && itemIds.length ? (
    itemIds.map(id => <ViewComponent key={id} id={id} />)
  ) : (
    <Loader />
  );
};

export default ItemsList;
