// UpdateTodoPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const UpdateTodoPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  
  const task = location.state?.task;

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      console.log('Updated Task:', { title, description });
      // Here you can integrate API calls to update the task in the database
      // After successful update, redirect to the main page or another page
      navigate('/');
    } else {
      alert('Please fill out both the title and description.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-center text-white mb-8">Update To-Do</h1>
      <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="text-white text-lg font-semibold">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter task title"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="text-white text-lg font-semibold">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter task description"
            ></textarea>
          </div>

          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg hover:bg-green-700"
            >
              Update Task
            </button>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-red-600 text-white rounded-lg text-lg hover:bg-red-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTodoPage;
