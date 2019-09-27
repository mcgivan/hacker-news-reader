import { storeData } from "./storage";

const BASE_URI = "https://hacker-news.firebaseio.com/v0";
const itemUrl = itemId => `${BASE_URI}/item/${itemId}.json`;
const userUrl = userId => `${BASE_URI}/user/${userId}.json`;
const topStoriesUrl = () => `${BASE_URI}/topstories.json`;
const bestStoriesUrl = () => `${BASE_URI}/beststories.json`;
const newStoriesUrl = () => `${BASE_URI}/newstories.json`;
const askStoriesUrl = () => `${BASE_URI}/askstories.json`;
const jobStoriesUrl = () => `${BASE_URI}/jobstories.json`;
const showStoriesUrl = () => `${BASE_URI}/showstories.json`;

export const fetchStory = storyId => {
  return fetch(itemUrl(storyId))
    .then(response => {
      if (!response.ok) {
        throw new Error("Sorry! Fetching error...");
      }
      response
        .clone()
        .text()
        .then(dataStr => storeData(storyId, dataStr));
      return response.json();
    })
    .catch(err => {
      console.log(err);
      return null;
    });
};

export const fetchUser = userId => {
  return fetch(userUrl(userId))
    .then(response => {
      if (!response.ok) {
        throw new Error("Sorry! Fetching error...");
      }
      return response.json();
    })
    .catch(err => {
      console.log(err);
      return null;
    });
};

export const fetchStories = (type = "new") => {
  let url;
  switch (type) {
    case "top":
      url = topStoriesUrl();
      break;
    case "best":
      url = bestStoriesUrl();
      break;
    case "ask":
      url = askStoriesUrl();
      break;
    case "job":
      url = jobStoriesUrl();
      break;
    case "show":
      url = showStoriesUrl();
      break;
    default:
      url = newStoriesUrl();
  }
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Sorry! Fetching error...");
      }
      return response.json();
    })
    .catch(err => {
      console.log(err);
      return null;
    });
};
