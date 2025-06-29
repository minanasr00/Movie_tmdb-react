import axios from 'axios'
import {type TrendList } from '../../types/TrendList'
import type { MovieList } from '../../types/MovieList'
import type { SeriesList } from '../../types/SeriesList'


const Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmJkNzA4ZmJiNTM1NTU2YjdiZDVhNmNmYWM4YzBkNyIsIm5iZiI6MTc0NjYxNzQ0NS43NTksInN1YiI6IjY4MWI0NDY1NzcyOTIwNDA2NjlmMDQwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qL7BoehEDs8kVMo1oKoLp6V4OVYwbWuRKqh74bHIVag'

export async function trendingMovies(): Promise<TrendList> {
    try {
         const res = await axios.get<TrendList>('https://api.themoviedb.org/3/trending/all/day?language=en-US', {
        headers: {
            Authorization
        }    
    })
    return res.data
    } catch (error) {
        console.error('Error fetching trending movies:', error);
        throw error;
    }
   
}

export async function getMoviesList(): Promise<MovieList> {
    try {
        const res =await axios.get<MovieList>(`https://api.themoviedb.org/3/discover/movie`, {
            headers: {
                Authorization
            }
        })
        return res.data
    } catch (error) {
        console.log(error);
        throw console.error();
        
    }
    
}
export async function getSeriesList(): Promise<SeriesList> {
    try {
        const res =await axios.get<SeriesList>(`https://api.themoviedb.org/3/discover/tv`, {
            headers: {
                Authorization
            }
        })
        return res.data
    } catch (error) {
        console.log(error);
        throw console.error();
        
    }
    
}