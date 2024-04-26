import { Link } from 'react-router-dom';

const Breadcrumb = ({ name }) => {
    return (
        <nav className="flex space-x-2 items-center">
            <Link to={`/`}><a href="#" className="inline-flex text-sm font-medium text-gray-700 hover:text-blue-600">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
            </a></Link>
            <span className="inline-flex text-sm font-medium text-gray-700 hover:text-blue-600">
                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
            </span>
            <span className="text-sm font-medium text-gray-700">{name}</span>
        </nav>
    )
}

export default Breadcrumb