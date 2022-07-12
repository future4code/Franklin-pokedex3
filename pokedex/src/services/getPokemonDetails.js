import { BASE_URL } from "../constants/url";
import axios from "axios";

export const getPokemonsDetails = async (props) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${props}/`);
    return response.data;
  } catch (e) {
    alert(e);
  }
};
