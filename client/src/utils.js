import queryString from "query-string";
import { useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const setParams = (history, query) => {
  // eslint-disable-next-line
  const location = Object.assign({}, history.location);

  // convert to {param1: value1}
  const parsed = queryString.parse(location.search);

  // add new params or replace old params
  Object.assign(parsed, query);

  // convert back to param1=value1&param2=value2
  const stringified = queryString.stringify(parsed);

  return history.push(`${location.pathname}?${stringified}`);
};

export { useQuery, setParams };
