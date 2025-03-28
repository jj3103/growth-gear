import { executeQuery } from "../models/queryModel.js";

export const processQuery = (req, res) => {
  try {
    const { query } = req.body;
    if (!query) throw new Error("Query is Required!!");
    const parsedQuery = executeQuery(query);
    return res.json(parsedQuery.result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const explainQuery = (req, res) => {
  try {
    const { query } = req.body;
    if (!query) throw new Error("Query is required");
    const parsedQuery = executeQuery(query);
    return res.json({ naturalQuery: query, sqlQuery: parsedQuery.sql });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const validateQuery = (req, res) => {
  try {
    const { query } = req.body;
    if (!query || typeof query !== "string") {
      throw new Error("Query must be a non-empty string.");
    }
    const parsedQuery = executeQuery(query);

    if (parsedQuery) {
      return res.json({
        valid: true,
        message: "Query Structure is correct",
      });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ valid: false, message: "Query Structure is not correct" });
  }
};
