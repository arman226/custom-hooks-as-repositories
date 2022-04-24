import axios from "axios";
import { REQUEST_TIMEOUT_SECONDS } from "api/constants";

export default axios.create({
  baseURL: process.env.MUSIC_BRAINZ_BASE_URL,
  timeout: REQUEST_TIMEOUT_SECONDS,
});
