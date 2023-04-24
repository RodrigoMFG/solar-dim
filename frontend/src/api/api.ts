import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
});

// Depois tem que configurar a manipulação de baseURL com base no ambiente entre dev e prod
