import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateTodoPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      console.log('New Task:', { title, description });
      // You can integrate API calls here to save the task in a database
      // After successful creation, redirect to the main page or another page
      navigate('/');
    } else {
      alert('Please fill out both the title and description.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Create New To-Do</h1>
      <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-white text-lg font-medium mb-2">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-white text-lg font-medium mb-2">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
            ></textarea>
          </div>

          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg hover:bg-green-700"
            >
              Create Task
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

export default CreateTodoPage;