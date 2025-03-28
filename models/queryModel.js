import { queryPatterns } from "../services/queryPattern.js";

export const executeQuery = (query) => {
  const normalizedQuery = query.toLowerCase().trim();
  const queryObject = queryPatterns.get(normalizedQuery);

  if (!queryObject) {
    throw new Error("unsupported query");
  }

  return {
    query: normalizedQuery,
    sql: queryObject.sql,
    result: queryObject.execute(),
  };
};
