import React from 'react'

export default function footer(){
  return (
    <>
    <div className='footerBackground text-white p-5'>
    <div className='d-flex justify-content-between'>
        <div className='footerBox'>
            
                <div className='fw-bold text-danger'>NAVIGATION</div>
                <div>Home</div>
                <div>About Us</div>
                <div>Term & condition</div>
                <div>Privacy Policy</div>
                <div>Contact Us</div>
        </div>
        <div className='footerBox'>
            <div className='text-danger fw-bold'>USEFUL LINK</div>
            <div>Start up Registration</div>
            <div>Private Limited Company</div>
            <div>Proprietorship Firm</div>
            <div>Limited Liability Partnership</div>
            <div>accounting & Bookkeeping</div>
        </div>
        <div className='footerBox'>
            <div className='text-danger fw-bold'>USEFUL LINK</div>
            <div>ESI Registration</div>
            <div>EPF Registration</div>
            <div>MSME Registration</div>
            <div>ITR Filing</div>
        </div>
        <div className='footerBox'>
            <div className='text-danger fw-bold'>CONTACT US</div>
            <div>Plot no 52,Bajaj Enclave,Kakrola New Delhi - 110078</div>
            <div>+91-9716-790-143</div>
            <div>Email: support@jsdincorporation</div>
        </div>

    </div>
    <div className='logo d-flex justify-content-center my-5'>
        <div className='fw-bold logoLeft'>JSD</div>
        <div className='fw-bold logoRight'>INCORPORATION</div>
    </div>
    <div className='lowerBorder mt-5'></div>
    <div className='mt-5'>©Copyright <span className='text-danger'>Jsdincorporation.com</span> All Rights Reserved</div>
    </div>
    </>
  )
}
