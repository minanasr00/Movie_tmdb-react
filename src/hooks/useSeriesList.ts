import { useQuery, type UseQueryResult } from "@tanstack/react-query"
import { getSeriesList } from "../services/api/api"
import type { SeriesList } from "../types/SeriesList"

function useSeriesList(): UseQueryResult<SeriesList> {
    const query = useQuery({ queryKey: ["seriesList"], queryFn: getSeriesList, staleTime: 1000 * 60 * 5, refetchInterval: 1000 * 60 * 5 })
    
    return query
}

export default useSeriesList
