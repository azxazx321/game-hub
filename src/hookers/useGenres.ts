import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import genresService from "../services/genresService";
import { FetchResponse } from "./useData";

export interface Genre {
     id: number;
     name: string;
     image_background: string;
}

const useGenres = () => {
     return useQuery<FetchResponse<Genre>, Error>({
          queryKey: ["genres"],
          queryFn: genresService.getGenres,
          
     })
}

// const useGenres = () => ({data: genres, isLoading: false, error: null});

export default useGenres;