import { Genre } from "../hookers/useGenres";
import { APIClient } from "./api-client";

export default new APIClient<Genre>('/genres')