import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Academics from './components/pages/std/Academics';
import Books from './components/pages/Facultiy/Books';
import Remarks from './components/pages/std/Remarks';
import Timetable from './components/pages/Facultiy/Timetable';
import Sports from './components/pages/std/Sports';
import Portions from './components/pages/Facultiy/Portions';

function App() {
    const [userRole, setUserRole] = useState("");

    return (
        <>
            <Routes>
                <Route path="/" element={<Login setUserRole={setUserRole} />} />

                {userRole === "std" && (
                    <>
                        
                        <Route path="/academics" element={<Academics />} />
                        <Route path="/remarks" element={<Remarks />} />
                        <Route path="/sports" element={<Sports />} />
                    </>
                )}

                {userRole === "fac" && (
                    <>
                         
                        <Route path="/books" element={<Books />} />
                        <Route path="/portions" element={<Portions />} />
                        <Route path="/timetable" element={<Timetable />} />
                    </>
                )}

                        {/* <Route path="/academics" element={<Academics />} />
                        <Route path="/remarks" element={<Remarks />} />
                        <Route path="/sports" element={<Sports />} />
                        <Route path="/books" element={<Books />} />
                        <Route path="/portions" element={<Portions />} />
                        <Route path="/timetable" element={<Timetable />} /> */}
            </Routes>
        </>
    );
}

export default App;
