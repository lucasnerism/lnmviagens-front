import { createContext, useEffect, useState } from 'react';
import api from '../services/api.js';
import { createSearchParams } from 'react-router-dom';

export const DetailsContext = createContext();

export default function DetailsProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [maxPriceTicket, setMaxPriceTicket] = useState("");
  const [maxPriceHotel, setMaxPriceHotel] = useState("");

  useEffect(() => {
    api.getCities()
      .then(resp => {
        setCities(resp.data);
      })
      .catch(err => console.log(err));
    getMaxPrice();
  }, []);

  const getMaxPrice = () => {
    const params = { limit: 1, orderBy: 'price', desc: true };
    const querystring = createSearchParams(params).toString();
    api.getTickets(querystring)
      .then(res => setMaxPriceTicket(res.data[0].price))
      .catch(err => console.log(err));
    api.getHotels(querystring)
      .then(res => setMaxPriceHotel(res.data[0].price))
      .catch(err => console.log(err));
  };

  return (
    <DetailsContext.Provider value={{ cities, setCities, maxPriceTicket, setMaxPriceTicket, maxPriceHotel, setMaxPriceHotel }}>
      {children}
    </DetailsContext.Provider>
  );
};