import React from "react";
import { render, cleanup } from "@testing-library/react";

import {
  waitForElement,
} from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import ShortStory from "../components/ShortStory";

test('render short story with proper id', async () => {
  const { getByText } = render(<ShortStory id="21099205" />)

  const link = await waitForElement(()=>getByText(/PHPAlgorithms/i));

  expect(link).toBeInTheDocument();
});

test('render error message for wrong id', async ()=>{
  const { getByText } = render(<ShortStory id="wrongId" />)

  const errorMessage = await waitForElement(()=>getByText(/sorry!/i));

  expect(errorMessage).toBeInTheDocument();
})

afterEach(cleanup);