import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../hooks/UserContext";
import { FaArrowLeft } from "react-icons/fa6";

const index = () => {
  const { values, setValues } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/users", values);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="w-screen h-screen grid place-items-center">
        <div className="w-1/3 p-6 border border-[#333]">
          <h1 className="mb-6 text-center text-3xl font-semibold text-[#333]">Add new User</h1>

          <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>

            <div className="flex flex-col">
              <label>Name</label>
              <input 
                className="border border-[#333] p-2" 
                placeholder="Enter your name" 
                type="text" 
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                required
              />
            </div>

            <div className="flex flex-col">
              <label>Email</label>
              <input 
                className="border border-[#333] p-2" 
                placeholder="Enter your email" 
                type="email" 
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label>Age</label>
              <input 
                className="border border-[#333] p-2" 
                placeholder="Enter your number" 
                type="number" 
                onChange={(e) => setValues({ ...values, age: e.target.value })}
                required
              />
            </div>

            <hr className="border-b-1 border-[#333]" />

            <div className="grid grid-cols-2 gap-x-2 mt-2">
              <Link className="border border-[#333] bg-[#333] px-4 py-2 text-[#fff] flex justify-center items-center gap-x-2 w-full" to="/"><FaArrowLeft className="text-[#fff]" />Go Back</Link>
              <button className="border border-[#333] p-2 px-6 bg-[#333] text-[#fff]" type="submit">Add</button>
            </div>
          
          </form>
        </div>
    </div>
  )
}

export default index;