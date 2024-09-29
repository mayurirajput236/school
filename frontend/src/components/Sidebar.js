import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="flex flex-col bg-gray-800 text-white w-64 min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            <Link 
                to="/class-dashboard" 
                className="mb-4 p-2 rounded hover:bg-gray-700 transition duration-300"
            >
                Class Dashboard
            </Link>
            <Link 
                to="/teacher-dashboard" 
                className="mb-4 p-2 rounded hover:bg-gray-700 transition duration-300"
            >
                Teacher Dashboard
            </Link>
        </div>
    );
};

export default Sidebar;

