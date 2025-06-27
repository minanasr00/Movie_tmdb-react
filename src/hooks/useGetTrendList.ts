import { trendingMovies } from "../services/api/api"
import { useQuery ,type UseQueryResult } from '@tanstack/react-query';
import { type TrendList } from "../types/TrendList";

export default function useGetTrendList() : UseQueryResult<TrendList> {
    const query = useQuery({queryKey:["trendList"], queryFn : trendingMovies })
    return query
}