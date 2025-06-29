import { trendingMovies } from "../services/api/api"
import { useQuery ,type UseQueryResult } from '@tanstack/react-query';
import { type TrendList } from "../types/TrendList";

export default function useGetTrendList() : UseQueryResult<TrendList> {
    const query = useQuery({ queryKey: ["trendList"], queryFn: trendingMovies, staleTime: 1000 * 60 * 5, refetchInterval : 1000*60*5})
    return query
}