import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa6";
import { UserContext } from "../../hooks/UserContext";

const index = () => {
  const { values, setValues } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/users/${id}`);
      setValues(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/users/${id}`, values);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUser();
  },[]);

  console.log(values);

  return (
    <div className="w-screen h-screen grid place-items-center">
        <div className="w-1/3 p-6 border border-[#333]">
          <h1 className="mb-6 text-center text-3xl font-semibold text-[#333]">Update {values.name}'s Info</h1>

          <form onSubmit={handleUpdate} className="flex flex-col gap-y-4">

            <div className="flex flex-col">
              <label>Name</label>
              <input 
                className="border border-[#333] p-2" 
                placeholder="Update your name" 
                type="text" 
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                required
              />
            </div>

            <div className="flex flex-col">
              <label>Email</label>
              <input 
                className="border border-[#333] p-2" 
                placeholder="Update your email" 
                type="email" 
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label>Age</label>
              <input 
                className="border border-[#333] p-2" 
                placeholder="Update your number" 
                type="number" 
                value={values.age}
                onChange={(e) => setValues({ ...values, age: e.target.value })}
                required
              />
            </div>

            <hr className="border-b-1 border-[#333]" />
            
            <div className="grid grid-cols-2 gap-x-2 mt-2">
              <Link className="border border-[#333] bg-[#333] px-4 py-2 text-[#fff] flex justify-center items-center gap-x-2 w-full" to="/"><FaArrowLeft className="text-[#fff]" />Go Back</Link>
              <button className="border border-[#333] p-2 px-6 bg-[#333] text-[#fff]" type="submit">Update</button>
            </div>
            
          </form>
        </div>
    </div>
  )
}

export default index