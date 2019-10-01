import React, { useEffect } from "react";
import useStories from "../hooks/useStories";
import usePaginator from "../hooks/usePaginator";
import useSlisedItems from "../hooks/useSlisedItems";
import ItemsList from "./ItemsList";
import ShortStory from "./ShortStory/ShortStory";
import Pagination from "./Pagination/Pagination";
import StoriesSelector from "./StoriesSelector/StoriesSelector";
import ErrorPage from "./Error/ErrorPage";
import ErrorMessage from "./Error/ErrorMessage";
import { useAppContext } from "./AppContext/AppContext";

const ItemsListWithShortStories = ItemsList(ShortStory);

const getTitle = route => {
  const titles = {
    "": "New Stories Feed",
    best: "Best Stories Feed",
    top: "Top Stories Feed",
    ask: "Ask Stories Feed",
    job: "Job Stories Feed",
    show: "Show Stories Feed",
  };
  return titles[route];
};

const allowedUrls = ["", "best", "top", "ask", "job", "show"];

const MainFeed = ({ "*": path }) => {
  const [state, dispatch] = useAppContext();
  const [items, error] = useStories(path);
  const [page, perPage, pages, setPerPage, setPage] = usePaginator(
    items.length,
    state.prevPage,
    state.perPage
   );
  const itemsOnPage = useSlisedItems(items, page, perPage);

  useEffect(() => {
    if(state.prevUrl !== path) {
      setPage(0);
    }
    dispatch({'type':'SET_PREV_URL', 'payload': path});
  }, [path]);

  useEffect(() => {
    if(!pages.length) {
      return;
    }
    const pageIndex = pages.map(([i]) => i - 1).indexOf(page);
    if (pageIndex === -1) {
      if (page > 0) {
        pages[pages.length - 1][1]();
      } else {
        pages[0] && pages[0][1] && pages[0][1]();
      }
    }
  }, [pages]);

  if (!allowedUrls.includes(path)) {
    return <ErrorPage />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div className="news-feed-wrapper">
      <h1>{getTitle(path)}</h1>
      <StoriesSelector perPage={perPage} handler={i => setPerPage(i)} />
      {ItemsListWithShortStories(itemsOnPage)}
      {items.length && pages.length > 1 ? (
        <Pagination pages={pages} currentPage={page} />
      ) : null}
    </div>
  );
};

export default MainFeed;
