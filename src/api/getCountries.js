import axios from "axios";
import { API_BASE_URL } from "@/utils/consts";

const getCountries = async () => {
  const baseUrl = API_BASE_URL;
  const response = await axios.get(`${baseUrl}/all`);
  return response.data;
};

export default getCountries;
