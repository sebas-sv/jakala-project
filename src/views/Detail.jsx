import Spinner from "../components/Spinner"
import Image from "../components/Image"
import Breadcrumb from "../components/Breadcrumb"
import Description from "../components/Description"
import { useFetchProduct } from "../hooks/useFetchProduct"
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams();
    const { product, isLoading } = useFetchProduct(id)

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    {/* <div className="grid gap-6 mt-8 grid-cols-4 pl-16 pr-16 content-end">
                        <Breadcrumb {...product} />
                    </div>
                    <div className="grid grid-rows-3 grid-flow-col gap-4 auto-rows-fr gap-8 pl-32 pr-32 pt-16">
                        <div className="row-span-3">
                            <Image {...product} noCut={true} />
                        </div>
                        <div className="col-start-3">
                            <Link to={`/`}>
                                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    Atrás
                                </button>
                            </Link>
                        </div>
                        <div className="row-span-2 col-span-2">
                            <Description  {...product} />
                        </div>
                        </div> */}

                    <div className="grid gap-6 mt-8 grid-cols-4 pl-16 pr-16 md:pl-32 md:pr-32 pr-16 mb-10">
                        <Breadcrumb {...product} />
                        <div className="col-start-6">
                            <Link to={`/`}>
                                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    Atrás
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div class="max-w-md mx-auto overflow-hidden md:max-w-2xl mb-16">
                        <div class="md:flex">
                            <div class="md:shrink-0">
                                <Image {...product} noCut={true} />
                            </div>
                            <div class="p-8 text-center sm:text-left">
                                <Description  {...product} />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Detail