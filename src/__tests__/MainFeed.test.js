import React from "react";
import { render, cleanup } from "@testing-library/react";

import { waitForElement } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import MainFeed from "../components/MainFeed";

test("render MainFeed", async () => {
  const homeUrl = {
    "*": "",
  };
  const bestStoriesUrl = {
    "*": "best",
  }
  const { getByText, rerender } = render(<MainFeed {...homeUrl} />);

  const [title] = await waitForElement(() => [
    getByText(/new stories feed/i)
  ]);

  expect(title).toBeInTheDocument();

  rerender(<MainFeed {...bestStoriesUrl} />)

  const newTitle = await waitForElement(()=>getByText(/best stories feed/i));

  expect(newTitle).toBeInTheDocument();

  
});

test("render MainFeed with 404", async () => {
  const dataUrl = {
    "*": "wrongUrl",
  };
  const { getByText } = render(<MainFeed {...dataUrl} />);

  const title = await waitForElement(() => getByText(/404/i));

  expect(title).toBeInTheDocument();
});

afterEach(cleanup);
