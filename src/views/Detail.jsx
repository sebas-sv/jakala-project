import { Link, useParams } from 'react-router-dom';

import { useFetchProduct } from "../hooks/useFetchProduct"

import Spinner from "../components/Spinner"
import Image from "../components/Image"
import Breadcrumb from "../components/Breadcrumb"
import Description from "../components/Description"


const Detail = () => {
    const { id } = useParams();
    const { product, isLoading } = useFetchProduct(id)

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <div className="grid grid-cols-2 px-16 my-8 md:px-32">
                        <Breadcrumb {...product} />
                        <div className="">
                            <Link to={`/`}>
                                <button className="float-right text-blue-700 font-semibold hover:bg-blue-500 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    Atrás
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="grid mb-16 md:grid-cols-4 md:items-center">
                        <div className="justify-self-center md:justify-self-end md:col-start-2">
                            <Image {...product} className="max-w-72 max-h-72 drop-shadow-md rounded-md" />
                        </div>
                        <div className="justify-self-center text-center pt-8 md:justify-self-start md:text-left md:pt-0 md:pl-8">
                            <Description  {...product} />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Detail