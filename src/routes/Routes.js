import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';

const Routing = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/*" element={<Home/>}></Route>
            </Routes>
        </Router>
    )
}

export default Routing;