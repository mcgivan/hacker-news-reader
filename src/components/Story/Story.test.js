import React from "react";
import { render, cleanup } from "@testing-library/react";

import {
  waitForElement,
} from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import Story from "../components/Story";

test("render full story by id", async () => {
  const { getByText } = render(<Story itemId="21099205" />);

  const backButton = await waitForElement(()=>( getByText(/back/i) )); 
  const title  = await waitForElement(()=>( getByText(/PHPAlgorithms/i) ));

  expect(backButton).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test("render error message with wrong id", async () => {
  const { getByText } = render(<Story itemId="test" />);

  const errorMessage  = await waitForElement(()=>( getByText(/sorry!/i) ));

  expect(errorMessage).toBeInTheDocument();
});

afterEach(cleanup);
