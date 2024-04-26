import { Link } from 'react-router-dom';
import icon from '../assets/icon.png';

const Header = () => {
    return (
        <div className="p-2 bg-gradient-to-r from-red-400 to-red-200 shadow-lg sm:p-4">
            <div className="flex items-center">
                <Link to={`/`}>
                    <img className="h-12 mx-6 sm:h-20 sm:ml-16 sm:mr-8" src={icon} alt="Logo" />
                </Link>
                <div>
                    <div className="text-xl font-extrabold text-black">Floristería dulces pétalos</div>
                    <p className="text-slate-100">Tu floristería de confianza</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
