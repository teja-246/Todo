import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateTodo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the title and description from the location state
  const { id: initialId, title: initialTitle, description: initialDescription } =
    location.state;

  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Updated Todo:", { title, description });
    // Perform any update logic here (e.g., API call)
    const response = fetch(
      `http://localhost:8000/user/update/${location.state.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      }
    );

    alert("Task updated successfully!");
    navigate("/"); // Navigate back to the main page
  };

  return (
    <div className="p-4 min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Update Todo</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-gray-100 p-4 py-6">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-700 bg-gray-700 text-gray-200 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2 text-gray-200">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-700 bg-gray-700 text-gray-200 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-400 text-white m-4 py-2 px-4 rounded font-semibold transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateTodo;
