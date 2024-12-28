import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  const tasks = [
    { id: 1, title: "Task 1", description: "Description for Task 1" },
    { id: 2, title: "Task 2", description: "Description for Task 2" },
    { id: 3, title: "Task 3", description: "Description for Task 3" },
  ];

  const handleView = (id) => {
    console.log(`View task with id: ${id}`);
  };

  const handleReview = (id) => {
    console.log(`Review task with id: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete task with id: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-white text-center mb-8">To-Do Dashboard</h1>
      <div className="grid gap-4 mb-8">
        {tasks.map((task) => (
          <div key={task.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-white">{task.title}</h2>
            <p className="text-gray-300 mb-4">{task.description}</p>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                onClick={() => handleView(task.id)}
              >
                View
              </button>
              <button
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
                onClick={() => handleReview(task.id)}
              >
                Review
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                onClick={() => handleDelete(task.id)}
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
        <Link to="/update">
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition-colors"
            onClick={() => console.log("Navigate to Update To-Do Page")}
          >
            Update To-Do
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;