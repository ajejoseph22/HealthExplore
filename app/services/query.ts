import qs from "qs";

export interface ISort {
  location?: "ASC" | "DESC";
  role?: "ASC" | "DESC";
  department?: "ASC" | "DESC";
  education?: "ASC" | "DESC";
  experience?: "ASC" | "DESC";
}

export function applyQueryFilters(
  url: string,
  filter: any = {},
  sort: ISort = {}
): string {
  const urlWithoutQuery = url.split("?")[0];

  const queryParts = [];

  Object.keys(sort).map((sortKey) => {
    queryParts.push(`${sortKey}=${sort[sortKey]}`);
  });

  const filterAsString = qs.stringify(filter);
  if (filterAsString) {
    queryParts.push(filterAsString);
  }

  if (queryParts.length) {
    return `${urlWithoutQuery}?${queryParts.join("&")}`;
  }

  return url;
}
