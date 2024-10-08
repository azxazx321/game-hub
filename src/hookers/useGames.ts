import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import useGameQueryStore from "../reducers/store";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}


const apiClient = new APIClient<Game>('/games')


const useGames = () =>{ 
  const gameQuery = useGameQueryStore(s => s.gameQuery)

  return useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: ({ pageParam = 1 }) => apiClient.getAll({
    params: {
      genres: gameQuery?.genreId,
      parent_platforms: gameQuery.platformId,
      ordering: gameQuery?.sortOrder,
      search: gameQuery?.searchText,
      page: pageParam,
    }
  }),
  keepPreviousData: true,
  getNextPageParam: (lastPage, allPages) => {
    //1 -> 2
    return lastPage.next ? allPages.length + 1 : undefined
  },
  staleTime: 24 * 60 * 60 * 1000 //24h

})}
export default useGames