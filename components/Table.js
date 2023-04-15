// import data from "../database/data.json";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { useQuery } from "react-query";
import { getUser } from "../lib/helper";

export default function Table() {
  const { isLoading, isError, data, error } = useQuery("users", getUser);

  if (isLoading) return <div>Employee Data is Loading...</div>;

  if (isError) return <div>Error: {error}</div>;

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-200">Name</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Email</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Salary</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Birthday</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Status</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {data.map((obj, i) => (
          <Tr {...obj} key={i} />
        ))}
      </tbody>
    </table>
  );
}

function Tr({ id, name, avatar, email, salary, date, status }) {
  return (
    <tr key={id} className="bg-gray-50 text-center">
      <td className="px-16 py-2 flex items-center">
        <img
          src={avatar || "#"}
          alt=""
          className="h-8 w-8 rounded-full object-cover"
        />
        <span className="text-center ml-2 font-semibold">
          {name || "Unknown"}
        </span>
      </td>
      <td className="px-16 py-2">
        <span>{email || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>${salary || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{date || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <button className="cursor-pointer">
          <span
            className={`${
              status == "Active" ? "bg-green-500" : "bg-red-500"
            } text-white px-5 py-1 rounded-full`}
          >
            {status || "Unknown"}
          </span>
        </button>
      </td>
      <td className="px-16 py-2 justify-around gap-5">
        <button className="cursor-pointer">
          <BiEdit size={25} className="text-green-500" />
        </button>
        <button className="cursor-pointer">
          <BiTrashAlt size={25} className="text-red-600" />
        </button>
      </td>
    </tr>
  );
}
