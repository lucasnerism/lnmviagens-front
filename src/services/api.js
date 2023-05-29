import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

const createHeader = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

const getCities = () => {
  return axiosInstance.get(`/cities`);
};

const getTickets = (query) => {
  return axiosInstance.get(`/flights?${query}`);
};

const getTicketById = (id) => {
  return axiosInstance.get(`/flights/${id}`);
};

const getHotels = (query) => {
  return axiosInstance.get(`/hotels?${query}`);
};

const getHotelsById = (id) => {
  return axiosInstance.get(`/hotels/${id}`);
};

export default {
  getCities,
  getTickets,
  getTicketById,
  getHotels,
  getHotelsById
};