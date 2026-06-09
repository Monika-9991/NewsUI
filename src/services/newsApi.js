import axios from "axios";

const API_KEY = "28201f475c9e46569c232518cae590b0"; // Replace with your key from newsapi.org
const BASE_URL = "https://newsapi.org/v2";

const newsClient = axios.create({
  baseURL: BASE_URL,
  params: { apiKey: API_KEY },
});

export const fetchTopNews = async (page = 1, pageSize = 12) => {
  const response = await newsClient.get("/top-headlines", {
    params: { country: "us", page, pageSize },
  });
  return response.data;
};

export const fetchByCategory = async (category, page = 1, pageSize = 12) => {
  const response = await newsClient.get("/top-headlines", {
    params: { country: "us", category, page, pageSize },
  });
  return response.data;
};

export const fetchBySearch = async (query, page = 1, pageSize = 12) => {
  const response = await newsClient.get("/everything", {
    params: { q: query, page, pageSize, sortBy: "relevance" },
  });
  return response.data;
};