import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const LayOut = () => {
    return (
        <div>
            <div id="colorlib-page">
                <Header />
                <Outlet /> {/* This renders the matched child routes */}
                
            </div>
        </div>
    );
};

export default LayOut;