import { useState, useEffect } from "react";
import { fetchStories } from "../utils/api";

const useStories = (storiesType = "new") => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [requestCall, setRequestCall] = useState(0);

  useEffect(() => {
    if (requestCall < 3) {
      let inProgress = true;
      const controller = new AbortController();
      fetchStories(storiesType, { signal: controller.signal })
        .then(fetchedData => {
          if (inProgress) {
            if (fetchedData) {
              setError(false);
              setItems(fetchedData);
            } else {
              setError(true);
              setTimeout(
                () => inProgress && setRequestCall(call => call + 1),
                3000
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
        controller.abort();
      };
    }
  }, [storiesType, requestCall]);

  return [items, error];
};

export default useStories;
