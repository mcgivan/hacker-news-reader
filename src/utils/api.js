import { getData, setData } from "./storage";

const BASE_URI = "https://hacker-news.firebaseio.com/v0";
const itemUrl = itemId => `${BASE_URI}/item/${itemId}.json`;
const userUrl = userId => `${BASE_URI}/user/${userId}.json`;
const topStoriesUrl = () => `${BASE_URI}/topstories.json`;
const bestStoriesUrl = () => `${BASE_URI}/beststories.json`;
const newStoriesUrl = () => `${BASE_URI}/newstories.json`;
const askStoriesUrl = () => `${BASE_URI}/askstories.json`;
const jobStoriesUrl = () => `${BASE_URI}/jobstories.json`;
const showStoriesUrl = () => `${BASE_URI}/showstories.json`;
const keyRegExp = /.*(?:\/(.+))\.json/;

const getStorageKey = url => {
  const [, matchedKey] = url.match(keyRegExp);
  if (matchedKey) {
    return matchedKey;
  }
  return null;
};

const cachedFetch = (url, options = {}) => {
  const key = getStorageKey(url);
  const cachedData = getData(key);
  if (cachedData) {
    console.log(`getting ${key} from cache`);
    return Promise.resolve(cachedData);
  }
  console.log(`fetching ${key}...`);
  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error("Sorry! Fetching error...");
      }
      response
        .clone()
        .text()
        .then(dataStr => {
          console.log(`storring ${key} to storage`);
          setData(key, dataStr);
        });
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const getNewStories = () => cachedFetch(newStoriesUrl());

export const getItem = itemId => cachedFetch(itemUrl(itemId));
