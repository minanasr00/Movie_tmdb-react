import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay,EffectCoverflow, Scrollbar} from 'swiper/modules';
import useGetTrendList from '../../hooks/useGetTrendList';
import HashLoader from './../../../node_modules/react-spinners/esm/HashLoader';
import 'swiper/css/bundle'
import 'swiper/css'
import { useState, useEffect } from 'react';


type TrendSwiperProps = {
  setMovieId: React.Dispatch<React.SetStateAction<number>>;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;    
  setOverview: React.Dispatch<React.SetStateAction<string>>;
  setVoteAvarage: React.Dispatch<React.SetStateAction<number>>;
};

export default function TrendSwiper({
  setMovieId,
  setImageUrl,
  setName,
  setOverview,
  setVoteAvarage,
}: TrendSwiperProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const { data, isError, isLoading, error } = useGetTrendList()
   
    useEffect(() => {
        const activeItem = data?.results[activeIndex];
         if (activeItem) {
                                setMovieId(activeItem.id)
                                setName(activeItem.name)
                                setOverview(`${activeItem.overview.slice(0,100)}...`)
                                setVoteAvarage(activeItem.vote_average)
                                setImageUrl(activeItem.backdrop_path)
                            }
    },[activeIndex, data?.results,setImageUrl])
    if (isError) {
        return <div>{error.message}</div>
    }
    if (isLoading) {
        return <div className=""><HashLoader size={50} style={{display:"flex",width:"100%", justifyContent:"center"}} color='#d20000' /></div>
    }

    

    return (
        <>
            <Swiper
                className='bg-[#00000099] '
                modules={[Navigation, Pagination, A11y, Autoplay, EffectCoverflow, Scrollbar]}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                 centeredSlides={true} 
                slidesPerView={"auto"}
                autoplay={{ disableOnInteraction: false, delay: 5000 }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                {data?.results.map((el, index) => {
                    return <SwiperSlide
                        onClick={()=> setActiveIndex(index)}
                        key={el.id}
                        style={{
                            width: '280px', 
                            height: '350px',
                            margin: '0 10px',
                        }}>
                        {() => {
                            return <div className='h-fit '>
                                <div className='w-fit h-fit'>
                                    <img className='rounded-2xl w-full h-full' src={`https://image.tmdb.org/t/p/original/${el.poster_path}`} alt="" />
                                </div>
                            </div>
                        }}
                    </SwiperSlide>
                })}
            </Swiper>
        </>
)
}
