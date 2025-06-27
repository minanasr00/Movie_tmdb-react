import useGetTrendList from "../../hooks/useGetTrendList"

// import { Swiper, SwiperSlide } from 'swiper/react';
export default function Home() {
    const {data , isError , isLoading ,error} = useGetTrendList()
    console.log(data);
    
    return <>
        <div className={`bg-[url("../assets/zjgs096khv591.jpg")] w-full h-[70vh]`} >
            <div className="flex items-end  relative isolate px-6 pt-14 lg:px-8 h-full">
                <div className="text-white shadow-2xl p-3 shadow-black w-[40%]">
                    <h1 className="text-3xl font-bold">Zoro</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, beatae quibusdam! Quam tempore et ducimus!
                    </p>
                    <div className="rating"></div>
                    <div className="buttons flex space-x-4">
                        <button>watch</button>
                        <button>more ifno"-"</button>
                    </div>
                </div>
                <div>
                
                </div>
        </div>
    </div>
    </>
}
