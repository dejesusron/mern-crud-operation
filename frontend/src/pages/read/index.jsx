import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa6";

const index = () => {
    const [data, setData] = useState([]);

    const { id } = useParams();

    const getUser = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/users/${id}`);
            setData(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUser();
    }, []);

  return (
    <div className="h-screen w-screen grid place-items-center">
        <div>
            <h1 className="text-center mb-4 font-bold text-3xl">{data.name}'s Details</h1>
            <div className="border border-[#333] p-6">
                <p><span className="font-semibold text-lg">ID:</span> {data._id}</p>
                <p><span className="font-semibold text-lg">Name:</span> {data.name}</p>
                <p><span className="font-semibold text-lg">Email:</span> {data.email}</p>
                <p><span className="font-semibold text-lg">Age:</span> {data.age}</p>
                <p><span className="font-semibold text-lg">Created At:</span> {new Date(data.createdAt).toLocaleDateString()} {new Date(data.createdAt).toLocaleTimeString()}</p>
                <p><span className="font-semibold text-lg">Updated At:</span> {new Date(data.updatedAt).toLocaleDateString()} {new Date(data.updatedAt).toLocaleTimeString()}</p>
            </div>
            <div className="mt-4">
                <Link className="border border-[#333] bg-[#333] px-4 py-1 text-[#fff] flex items-center gap-x-2 w-max" to="/"><FaArrowLeft className="text-[#fff]" />Go Back</Link>
            </div>
        </div>
    </div>
  )
}

export default index