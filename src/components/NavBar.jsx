import Fetch from './Fetch';
import Students from './Students'



import { Route, Routes, Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
        <nav className='barra-de-navegacion'>
            <Link to="/students">Students</Link>

            <Link to="/fetch">Fetch</Link>

        </nav>
            <Routes>
                <Route path="/students" element={<Students />} />

                <Route path="/fetch" element={<Fetch />} />
            </Routes>
            </div>

    )
}

export default NavBar