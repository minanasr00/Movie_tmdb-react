import { useState } from "react";
import TrendSwiper from "../../components/TrendSwiper/TrendSwiper";
import { useNavigate } from "react-router-dom";
import MovieListSwiper from "../../components/MovieListSwiper/MovieListSwiper";
import { FaArrowRightLong } from "react-icons/fa6";
import SeriesListSwiper from "../../components/SeriesListSwiper/SeriesListSwiper";

// import { Swiper, SwiperSlide } from 'swiper/react';
export default function Home() {
    const [imageUrl , setImageUrl] = useState('')
    const [name , setName] = useState('')
    const [overview , setOverview] = useState('')
    const [voteAverage , setVoteAvarage] = useState(0)
    const [movieId, setMovieId] = useState(0)
    const stars = Math.round((voteAverage ? (voteAverage / 10 * 5) : 0)); 
    const navigate = useNavigate()
  
    return <>
        <div className="bg-[#030A1B]">
        <div  style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${imageUrl})`,backgroundPosition:"top"}} className={`bg-no-repeat relative bg-cover flex items-center bg-white border border-gray-200 h-screen  shadow-sm md:flex-row  hover:bg-gray-100 dark:border-[#030A1B] dark:bg-[#030A1B] dark:hover:bg-[#030A1B]`}>
        <div className=" absolute right-0 left-0 bottom-[-10px] flex flex-col justify-between p-4 leading-normal shadow-2xl shadow-black bg-[#00000099]">
                <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white">{ name}</h5>
                <p className="mb-2 font-normal text-white">{overview}</p>
                    <div className="flex items-center text-2xl text-white">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < stars ? "text-yellow-400 text-3xl" : "text-gray-400 text-3xl"}>
                            {i < stars ? "★" : "☆"}
                        </span> 
                    ))}
                    {/* <span className="ml-2  text-gray-400 text-3xl">{voteAverage?.toFixed(1)}/10</span> */}
                </div>
                <div>
                    <button onClick={() =>{navigate(`moviedetails/${movieId}`)}} className="text-white border border-blue-700 rounded-2xl p-2 flex items-center hover:text-blue-800 mt-3"><span className="pb-1 me-1">More Info</span>  <FaArrowRightLong /></button>
                    </div>
                     <div className="mt-3">
                <h1 className="text-3xl text-white mb-3 font-bold px-1">Trends</h1>
            <TrendSwiper setMovieId={setMovieId} setImageUrl={setImageUrl} setName={setName} setOverview={setOverview} setVoteAvarage={setVoteAvarage} ></TrendSwiper>    
            </div>
            </div>
        </div>
           
            <div className="mt-25 pb-10 px-5">
                <div className="flex justify-between items-center">
                <h1 className="text-3xl text-white pb-3 font-bold">
                    Movies
                    </h1>
                    <div onClick={() => {
                        navigate("/movies")
                    }} className="name text-md text-white flex  items-center hover:text-blue-700"><span className="pb-1 me-1"> See More</span> <FaArrowRightLong /></div>
                </div>
                <MovieListSwiper></MovieListSwiper>
            </div>
            <div className="mt-25 pb-10 px-5">
                <div className="flex justify-between items-center">
                <h1 className="text-3xl text-white pb-3 font-bold">
                    Series
                    </h1>
                    <div onClick={() => {
                        navigate("/series")
                    }} className="name text-md text-white flex  items-center hover:text-blue-700"><span className="pb-1 me-1"> See More</span> <FaArrowRightLong /></div>
                </div>
                <SeriesListSwiper></SeriesListSwiper>
            </div>
        </div>
        
    </>
}
