import { regions } from "../constants";

export const useRegion = (word) => {
  if (regions.find((region) => region.toLowerCase() === word.toLowerCase())) {
    return word;
  } else {
    alert("not found");
  }
};
