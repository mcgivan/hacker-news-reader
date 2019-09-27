import React from "react";
import useStories from "../hooks/useStories";
import usePaginator from "../hooks/usePaginator";
import useSlisedItems from "../hooks/useSlisedItems";
import ItemsList from "./ItemsList";
import ShortStory from "./ShortStory";
import Pagination from "./Pagination";
import StoriesQuantityChanger from "./StoriesQuantityChanger";
import ErrorPage from "./ErrorPage";

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
  const [items, error] = useStories(path);
  const [page, perPage, pages, setPerPage] = usePaginator(items.length);
  const itemsOnPage = useSlisedItems(items, page, perPage);

  if (!allowedUrls.includes(path)) {
    return <ErrorPage />;
  }

  if (error) {
    return <div>Sorry! Try again later :(</div>;
  }

  return (
    <div className="news-feed-wrapper">
      <h1>{getTitle(path)}</h1>
      <StoriesQuantityChanger perPage={perPage} handler={setPerPage} />
      {ItemsListWithShortStories(itemsOnPage)}
      {items.length ? <Pagination pages={pages} currentPage={page} /> : null}
    </div>
  );
};

export default MainFeed;
