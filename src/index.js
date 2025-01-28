import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './index.scss';
import './destination.scss';
import './crew.scss';
import './tech.scss'
import GeneralLayout from './GeneralLayout';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Tech from './pages/Tech';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
            <Routes>
                <Route element={ <GeneralLayout />}>
                    <Route path='/' element={ <Home/>}> </Route>
                    <Route path='destination' element={ <Destination />}></Route>
                    <Route path='crew' element={ <Crew />}></Route>
                    <Route path='technology' element={ <Tech />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
);

