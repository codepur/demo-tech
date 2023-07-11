import { useRouter } from 'next/router'
import React from 'react'
import { Image } from 'react-bootstrap'

export default function ChooseEntity() {
    const router = useRouter();
    const handleCard=(e)=>{
        e.preventDefault();
        router.push(`/getStarted`);
    }
    return (
        <>
            <div class="container mb-5">
                <div class="row justify-content-center mb-3">
                    <div class="col-lg-8">
                        <div class="section-title text-center">
                            <h2 class="title mb-0">Choose an  <span className='p-1 bg-red-600 text-slate-300'> Entity</span> </h2>
                            <h5>Receive a call from an executive to get started. </h5>
                        </div>
                    </div>
                </div>
                <div class="row" align="center">
                    <div class="col-lg-4 col-md-4 ">
                        <div class="card" style={{width: "21rem"}}>
                            <Image src="images/Company Registration-2-min.jpg"  class="card-img-top img entityimg" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Company Registration</h5>
                                    <p class="card-text">Easily incorporate a private limited company with various registrations.</p>
                                    <a href="" class="btn btn-danger" onClick={handleCard}>GET STARTED</a>
                                </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 ">
                        <div class="card" style={{width: "21rem"}}>
                            <Image src="images/GST Registration-min.jpg" class="card-img-top img entityimg" alt="..."/>

                                <div class="card-body">
                                    <h5 class="card-title">GST Registration</h5>
                                    <p class="card-text">Assisted GST registration for your business with LEDGERS GST software.</p>
                                    <a href="" class="btn btn-danger" onClick={()=>handleCard()}>GET STARTED</a>
                                </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 ">
                        <div class="card" style={{width: "21rem"}}>
                            <Image src="images/GST Return Filing (1 Year)-2-min.jpg" class="card-img-top img entityimg" alt="..." />

                                <div class="card-body">
                                    <h5 class="card-title">GST Return Filing (1 Year)</h5>
                                    <p class="card-text">1 year GST return filing (GSTR 3B &amp; 1) along with LEDGERS GST Software.</p>
                                    <a href="" class="btn btn-danger" onClick={handleCard}>GET STARTED</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
