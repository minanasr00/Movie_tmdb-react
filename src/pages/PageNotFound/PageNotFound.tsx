import { useNavigate } from "react-router-dom"
import img from "../../assets/404-error-template-6.png"
export default function PageNotFound() {
    const navigate = useNavigate()
    return <div
        className="bg-[)] w-full h-screen">
        <img src={img} className="w-full h-screen object-cover relative" alt="" />
        <button onClick={() => {
            navigate("/")
        }}  className="absolute top-[59%] left-[44%]  px-19 py-2 text-white"> 🔗</button>
  </div>
}
