import { Link } from 'react-router-dom';
import icon from '../assets/icon.png';

const Header = () => {
    return (
        <div className="flex bg-white items-center justify-between p-5 bg-gradient-to-r from-red-400 to-red-200 shadow-lg">
            <div className="flex items-center">
                <Link to={`/`} className="flex items-center">
                    <img className="h-16 ml-6 mr-4 sm:h-24 sm:ml-12 sm:mr-6" src={icon} alt="Logo" />
                </Link>
                <div>
                    <div className="text-xl font-extrabold text-black">Floristería dulces pétalos</div>
                    <p className="text-slate-100 mb-4">Tu floristería de confianza</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
