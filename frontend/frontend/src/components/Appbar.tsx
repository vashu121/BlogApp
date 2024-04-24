import { Link , useNavigate} from "react-router-dom"

export const Appbar = () => {
    const navigate=useNavigate();
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
                Medium
        </Link>
        <div className="flex justify-between" >
            <Link to={`/publish`}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
            </Link>

            <div className="rounded-full h-10 w-10 bg-slate-200">
                <div className="flex flex-col justify-center h-full text-xl">
                    <button onClick={()=>{
                        localStorage.removeItem('token');
                        navigate("/signin");
                    }}>Off</button> 
                </div>
            </div>
        </div>
    </div>
}