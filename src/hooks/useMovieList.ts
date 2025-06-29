import { useQuery, type UseQueryResult } from "@tanstack/react-query"
import { getMoviesList } from "../services/api/api"
import type { MovieList } from "../types/MovieList"


function useMovieList(): UseQueryResult<MovieList> {
    const query = useQuery({ queryKey: ['movielist'], queryFn: getMoviesList, staleTime : 1000 * 60 * 5  , refetchInterval : 1000*60*5 })
    return query
}

export default useMovieList
