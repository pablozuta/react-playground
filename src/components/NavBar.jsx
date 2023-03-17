import Fetch from './Fetch';
import RickAndMortyFetch from './RickAndMortyFetch'



import { Route, Routes, Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
        <nav className='barra-de-navegacion'>
            <Link to="/rickandmortyfetch">Rick and Morty</Link>

            <Link to="/fetch">Fetch</Link>

        </nav>
            <Routes>
                <Route path="/rickandmortyfetch" element={<RickAndMortyFetch />} />

                <Route path="/fetch" element={<Fetch />} />
            </Routes>
            </div>

    )
}

export default NavBar