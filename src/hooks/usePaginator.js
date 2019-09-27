import { useState, useEffect } from "react";
const floor = Math.floor;
const getPages = (startPage, lastPage, callback) => {
  let pages = [];
  let minPage = startPage - 2;
  let maxPage = minPage < 0 ? minPage * -1 + startPage + 2 : startPage + 2;
  minPage = minPage < 0 ? 0 : minPage;
  if (maxPage >= lastPage) {
    minPage -= maxPage - lastPage;
    maxPage = lastPage;
  }
  for (let i = minPage; i <= maxPage; i++) {
    pages.push([i + 1, () => callback(i)]);
  }
  return pages;
};
const usePaginator = (totalElements, startPage = 0, itemsOnPage = 5) => {
  const [perPage, setPerPage] = useState(itemsOnPage);
  const [page, setPage] = useState(startPage);
  const [numOfPages, setNumOfPages] = useState(floor(totalElements / perPage));
  const [pages, setPages] = useState(getPages(page, numOfPages, setPage));

  useEffect(() => {
    setNumOfPages(floor(totalElements / perPage));
  }, [totalElements, perPage]);

  useEffect(() => {
    setPages(getPages(page, numOfPages, setPage));
  }, [numOfPages, page]);

  return [page, perPage, pages, setPerPage];
};

export default usePaginator;
