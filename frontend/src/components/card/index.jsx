import { Link } from "react-router-dom"
import { FaList, FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import axios from "axios";

const index = ({ ...item }) => {
  const handleDelete = async (id) => {
    const confirm = window.confirm(`Are your sure you want to delete ${item.name}'s info?`);

    if (confirm) {
      try {
        await axios.delete(`http://localhost:5000/api/users/${id}`);
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
     <tr>
        <td className="border p-2">{item.name}</td>
        <td className="border p-2">{item.email}</td>
        <td className="border p-2">{item.age}</td>
        <td className="border p-2">{new Date(item.createdAt).toLocaleDateString()} {new Date(item.createdAt).toLocaleTimeString()}</td>
        <td className="border p-2 grid grid-cols-3 gap-x-1">
            <Link title="View user" to={`/read/${item._id}`} className="border bg-[#15803d] text-[#fff] p-2 grid place-items-center"><FaList className="text-[#fff]" /></Link>
            <Link title="Update user" to={`/update/${item._id}`} className="border bg-[#0369a1] text-[#fff] p-2 grid place-items-center"><FaEdit /></Link>
            <button 
              title="Delete user" 
              className="border bg-[#b91c1c] text-[#fff] p-2 grid place-items-center"
              onClick={() => handleDelete(item._id)}
            ><FaTrashCan /></button>
        </td>
    </tr>
  )
}

export default index