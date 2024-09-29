import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ClassDashboard from './components/ClassDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import './index.css';

const App = () => {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route path="/class-dashboard" element={<ClassDashboard />} />
                <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
