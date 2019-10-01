import { getPersistentData } from "../../utils/storage";

const initState = {
  perPage: getPersistentData("perPage") || 5,
  prevUrl: getPersistentData("prevUrl") || "",
  prevPage: getPersistentData("prevPage") || 0,
};

export default initState;
