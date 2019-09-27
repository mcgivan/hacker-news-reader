import { useState, useEffect } from "react";
import { fetchStory } from "../utils/api";
import { getData } from "../utils/storage";

const useStory = itemId => {
  const [item, setItem] = useState(getData(itemId));
  const [error, setError] = useState(false);
  const [requestCall, setRequestCall] = useState(0);

  useEffect(() => {
    if (item) {
      return;
    }
    if (requestCall < 3) {
      let inProgress = true;
      fetchStory(itemId)
        .then(story => {
          if (inProgress) {
            if (story) {
              setError(false);
              setItem(story);
            } else {
              setError(true);
              setTimeout(
                () => inProgress && setRequestCall(call => call + 1),
                3000,
              );
            }
          }
        })
        .catch(e => {
          inProgress && setError(true);
          setTimeout(
            () => inProgress && setRequestCall(call => call + 1),
            3000,
          );
        });
      return () => {
        inProgress = false;
      };
    }
  }, [itemId, requestCall]);

  return [item, error];
};

export default useStory;
