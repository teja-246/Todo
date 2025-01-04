import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:8000/user/getAllTasks");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setTasks(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchTasks();
  }, []);

  const handleView = (id) => {
    console.log(`View task with id: ${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/user/delete/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log(result.message);

      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  };

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        To-Do Dashboard
      </h1>
      <div className="grid gap-4 mb-8">
        {tasks.map((task) => (
          <div key={task._id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-white">{task.title}</h2>
            <p className="text-white mb-4">{task.description}</p>
            <div className="flex justify-end gap-4">
              <Link
                to={`/update/${task._id}`}
                state={{
                  id: task._id,
                  title: task.title,
                  description: task.description,
                }}
                className="text-white py-1 px-3 rounded mt-2 inline-block"
              >
                <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg text-lg hover:bg-blue-700 transition-colors">
                  Update To-Do
                </button>
              </Link>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                onClick={() => handleView(task._id)}
              >
                View
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                onClick={() => handleDelete(task._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-8">
        <Link to="/create">
          <button
            className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg hover:bg-green-700 transition-colors"
            onClick={() => console.log("Navigate to Create To-Do Page")}
          >
            Create To-Do
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
