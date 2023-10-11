import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card/index";
import { UserContext } from "../../hooks/UserContext";
import axios from "axios";
import { FaUserPlus, FaSearch } from "react-icons/fa";

const index = () => {
    const { userData, setUserData, query, setQuery } = useContext(UserContext);

    const getUsers = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/users");
            setUserData(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const filtered = userData.filter((user) => {
        if (query === "" || user.name.toLowerCase().includes(query)) {
            return user;
        }
    })

    const card = filtered.map((item) => {
        return (
            <Card key={item._id} {...item} />
        )
    })

    useEffect(() => {
        getUsers();
    }, [userData]);


  return (
    <div className="h-screen w-screen pt-16">
        <h1 className="text-center mb-8 font-bold text-3xl">List of Users</h1>

            <div className="flex flex-col gap-y-4 w-2/3 h-4/5 border border-[#333] mx-auto p-6">
                <div className="flex justify-between">
                    <div className="relative w-1/2">
                        <input 
                            className="border border-[#333] pl-10 p-2 w-full" 
                            type="text" 
                            placeholder="Search user..." 
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <FaSearch className="absolute top-[50%] translate-y-[-50%] left-3" />
                    </div>
                    
                    <Link to="/create" className="border border-[#333] px-6 py-2 bg-[#333] text-[#fff] flex items-center gap-x-2"><FaUserPlus />Add New</Link>
                </div>
                <div className="w-full h-full overflow-scroll">
                    <table className="w-full table-auto">
                        <thead>
                            <tr>
                                <th className="text-start border border-[#333] p-2 bg-[#333] text-[#fff]">Name</th>
                                <th className="text-start border border-[#333] p-2 bg-[#333] text-[#fff]">Email</th>
                                <th className="text-start border border-[#333] p-2 bg-[#333] text-[#fff]">Age</th>
                                <th className="text-start border border-[#333] p-2 bg-[#333] text-[#fff]">Created At</th>
                                <th className="text-start border border-[#333] p-2 bg-[#333] text-[#fff]">Action</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {!filtered.length ? <tr><td className="pt-2">No results found</td></tr> : card}
                        </tbody>
                        
                    </table>
                </div>
            </div>
        
        
    </div>
  )
}

export default index