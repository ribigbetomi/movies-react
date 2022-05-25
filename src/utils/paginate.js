import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
  //   _.slice(items, startIndex) slices the array of items starting from the item with the startIndex
  //   _.take() takes the array of items into the pageSize
}
