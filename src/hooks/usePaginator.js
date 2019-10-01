import { useState, useEffect } from "react";
import { useAppContext } from "../components/AppContext/AppContext";
const ceil = Math.ceil;
const getPages = (startPage, lastPage, callback) => {
  let pages = [];
  let minPage = startPage - 2;
  let maxPage = minPage < 0 ? minPage * -1 + startPage + 2 : startPage + 2;
  minPage = minPage < 0 ? 0 : minPage;
  if(!lastPage) {
    return pages;
  }
  lastPage -= 1;
  if (maxPage >= lastPage) {
    minPage -= maxPage - lastPage;
    maxPage = lastPage;
  }
  minPage = minPage < 0 ? 0 : minPage;
  for (let i = minPage; i <= maxPage; i++) {
    pages.push([i + 1, () => callback(i)]);
  }
  return pages;
};
const usePaginator = (totalElements, startPage, itemsOnPage) => {
  const [,dispatch] = useAppContext();
  const [perPage, setPerPage] = useState(itemsOnPage);
  const [page, setPage] = useState(startPage);
  const [numOfPages, setNumOfPages] = useState(ceil(totalElements / perPage));
  const [pages, setPages] = useState(getPages(page, numOfPages, setPage));

  useEffect(() => {
    if(!totalElements) {
      return;
    }
    dispatch({type: 'SET_PER_PAGE', payload: perPage});
    setNumOfPages(ceil(totalElements / perPage));
  }, [totalElements, perPage]);
  
  useEffect(() => {
    if(!totalElements || !numOfPages) {
      return;
    }
    dispatch({type:'SET_PREV_PAGE', payload: page});

    setPages(getPages(page, numOfPages, setPage));
    document.body.scrollIntoView({behavior: 'smooth'});
  }, [numOfPages, page]);

  return [page, perPage, pages, setPerPage, setPage];
};

export default usePaginator;
