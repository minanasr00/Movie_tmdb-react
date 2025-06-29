import useMovieList from '../../hooks/useMovieList'
import { Swiper, SwiperSlide } from 'swiper/react';
import HashLoader from './../../../node_modules/react-spinners/esm/HashLoader';
import { Navigation, Pagination, A11y, EffectCoverflow, Scrollbar } from 'swiper/modules';
import 'swiper/css/bundle'
import 'swiper/css'
import { useNavigate } from 'react-router-dom';


export default function MovieListSwiper() {
    const { data, error, isError, isLoading } = useMovieList()
const navigate = useNavigate()
    if (isError) {
        <div>{ error.message}</div>
    }else if (isLoading) {
        <div> <HashLoader></HashLoader></div>
    }
    return(
        <>  
            <Swiper
                modules={[Navigation, Pagination, A11y, EffectCoverflow, Scrollbar]}
                pagination={{
                    clickable: true,
                    type: 'bullets',
                }}
                className=''
                scrollbar={{ draggable: true }}
                slidesPerView={'auto'}
                effect='coverflow'
                centeredSlides={true} 
                >
                {data?.results.map((el, index) => {
                    return <SwiperSlide style={{                     
                        width: '280px',                       
                        height: '420px',                      
                        margin: '0 10px',
                        paddingBottom: "10px"
                        }}                        
                        key={index}
                    >                       
                        <div>                            
                            <div onClick={() => {
                                navigate(`/movie-details/${el.id}`)
                            }} className='text-white hover:cursor-pointer'>
                                <img className='w-full h-[350px]' src={`https://image.tmdb.org/t/p/original/${el.poster_path}`} alt="" />
                            </div>                            
                                <p className='text-2xl text-white mt-3 pb-10'>{el.title}</p>                            
                            </div>                        
                    </SwiperSlide>                    
                })}                
            </Swiper>                       
        </>    
    )
    
}
