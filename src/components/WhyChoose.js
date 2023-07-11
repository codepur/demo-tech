import { Card, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'
import { CheckIcon } from '@heroicons/react/20/solid'

export default function WhyChoose() {
    const includedFeatures = [
        'Private forum access',
        'Member resources',
        'Entry to annual conference',
        'Official member t-shirt',
    ]
    return (
        <>
            <div className='container'>
                <div className="bg-white py-5 sm:py-14">
                    <div className="mx-auto max-w-7xl ">
                        <div className="mx-auto mt-16 max-w-2xl bg-gray-50 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0  lg:max-w-none">
                            <h3 class="text-center font-bold p-1 pt-5">Why <span className='p-1 bg-red-600 text-slate-300'>Choose us</span></h3>
                            <Carousel style={{ height: "50vh" }}>
                                <Carousel.Item>
                                    <div className="p-8 sm:p-10 lg:flex-auto">
                                        <h3 className="text-center text-2xl font-bold tracking-tight text-gray-900">
                                            <i> Simple &amp; Fast Company Formation  </i>
                                        </h3>
                                        <p className="mt-6 text-base leading-7 text-gray-600">
                                            We have designed both our website and company set-up process to be easy to use and to allow our customers to gain the necessary information and carry out their incorporation quickly and accurately. By talking to our customers we have adapted our company formation system to be as intuitive and as straight forward are possible.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="p-8 sm:p-10 lg:flex-auto">
                                        <h3 className="text-center text-2xl font-bold tracking-tight text-gray-900">
                                            <i> Always value for money</i>
                                        </h3>
                                        <p className="mt-6 text-base leading-7 text-gray-600">
                                            As a company ourselves, we run our business in an efficient and productive manner. Our customers gain from the way we operate: fast responses, products which make sense and prices which
                                            offer exceptional value. We constantly monitor the prices being offered by other
                                            formation agents so that you can always be sure that the value you see today is the
                                            result of our drive to remain and increase our standing as one of the Indians most respected company formation agents.
                                        </p>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
