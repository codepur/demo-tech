import React, { useState } from 'react'
import Footer from "./common/footer"
import styles from "../styles/companyType.module.scss"
import { Form, Image } from 'react-bootstrap'
export default function Started() {
    const [type, setType] = useState([{
        name: "company",
        heading: "Private Limited Company Registration",
        subHeading: "Private Limited Company is highly preferred entity for your business. Jsd Incorporation can easily register your company in 3 easy steps via 100% online process in maximum 7 days.",
        descriptionHeading: "IT IS HIGHLY PREFERRED BY STARTUPS.",
        description: `A private company, sometimes called a privately held company or a close corporation, is a type of business owned either by a non-governmental organization or by a small number of owners. It can be registered with only 2 promotors who can also be shareholders of company. It limits owner liability to their shares only. Maximum number of shareholders can be extended to 200.

        Jsd incorporation offers affordable and quick services to register the private ltd company through online process at an affordable price that help to save your valuable time and money. Private Ltd company registration is one of the most famous and preferred lawful entities in India. In other words, it’s a legitimate company registration in India with the service of ministry of corporate affairs and gives you rights for working anywhere in India or outside.
        
        Our highly experience team of CA & CS can not only help your register your private limited company, but can also guide you through the year to ensure compliance. We have customized package to suit your need and budget. We highly recommend to read the benefits of each plan and take your decision based on both short term and long term requirement of your new company registration. Speak or chat with our team today.`,

        packageHeading: "Choose Your Package",
        packageSubHeading: "Our flexible pricing options make it easy to get started.",

    }])
    const silverList = [
        "2 Class 2 DSCs  with 2 year validity",
        "2 Director Identification Numbers",
        "Name Approval in SPICe+ Form",
        "1 Lakh Authorized Capital",
        "Incorporation Fee",
        "Stamp Duty",
        "e-MOA and e-AOA",
        "Certificate of Incorporation",
        "Company Identification Number (CIN)",
        "PAN Number",
        "TAN Number"
    ]
    const goldList = [
        "Silver + Below",
        "1 Seperate Name Approval ",
        "GST Registration",
        "ESI & PF Registration",
        "MSME Registration",
        "Bank Account Opening Support",
        "First Auditor Appointment",
        "Commencement of Business Certificate"

    ]
    const platinumList = [
        "Gold + Below",
        "Bookkeeping",
        " Financial Statement Preparation",
        "Annual Report",
        "Director's Report",
        "Board Resolution Preparation",
        "MCA Annual Return Filing",
        "Income Tax Return Filing",
        "1 Year GST Return Filing",
        "1 Year GST Return Filing",
        "1 Year Dedicated Compliance Manager Support",
    ]
    const advantages = [{
        heading: "Easy Fund Raising",
        desc: "Pvt. Ltd. Company registration process is stringent enough to make this structure credible among others which makes fundraising or borrowing from external sources easier. The organization itself provides a number of ways to raise funds in the form of private equity, ESOP, and more."
    },
    {
        heading: "Separate Legal Existence",
        desc: "Once the Company registration in India is done, a legal entity is born in eyes of law. This separates itself from its owners and managers. The company can operate on its own name simply by opening a bank account to own assets and enter into contract with parties. This also provides right to sue third parties in case of any defaults."
    },
    {
        heading: "Owners’ Limited Liability",
        desc: "The company’s obligation or debts of does not create a charge over the owner’s personal assets. Their liability stays limited only to the capital subscribed and unpaid by them."
    },
    {
        heading: "Management and Ownership Separation",
        desc: "The separate ownership and management help both – the company and the management to focus on their potential works. The shareholders assign responsibility to operate and run the company without losing control in the form of voting."
    }]
    const documents = [
        {
            image: "/images/camera.png",
            heading: "Photograph",
            desc: "Latest Passport size photograph of Shareholders and Directors."
        },
        {
            image: "/images/credit-card.png",
            heading: "PAN Card",
            desc: "PAN Card of shareholders and Directors. Foreign nationals must provide a valid passport.."
        },
        {
            image: "/images/id-card.png",
            heading: "Identity Proof",
            desc: "Aadhar card and Voter ID/ Passport/ Driving License of Shareholders and Directors."
        },
        {
            image: "/images/destination.png",
            heading: "Directors Address Proof",
            desc: "Latest Telephone Bill /Electricity Bill/ Bank Account Statement of Shareholders and Directors."
        },
        {
            image: "/images/handshake.png",
            heading: "NOC from owner",
            desc: "No Objection Certificate to be obtained from the owner(s) of registered office"
        },
        {
            image: "/images/gps.png",
            heading: "Business Address Proof",
            desc: "Latest Electricity Bill/ Telephone Bill of the registered office address"
        },
        {
            image: "/images/note.png",
            heading: "Rent Agreement",
            desc: "Rent Agreement of the registered office should be provided if any"
        },
        {
            image: "/images/checklist.png",
            heading: "Note",
            desc: "In case of NRI or Foreign National, documents of director (s) must be notarized or apostilled"
        },

    ]

    const progressBar = [{
        point: "Step 1",
        detail: "Complete Your Online Application"
    },
    {
        point: "Step 2",
        detail: "Upload Your Document",
    },
    {
        point: "Step 3",
        detail: "Select right package and make payment",
    },
    {
        point: "Step 4",
        detail: "Company get registered",
    },
    {
        point: "Step 5",
        detail: "Get company kit"
    }
    ]

    return (
        <>
            {
                type?.map((item) => (
                    <>
                        <div className={`${styles.mainContainer}`}>
                            <div className={`${styles.subContainer} py-5 row ps-4`}>
                                <div className={`${styles.container} ps-5 py-5`}>
                                    <div className={`${styles.heading} fw-bold text-danger `}>{item?.heading}</div>
                                    <div className={`${styles.subHeading} text-white py-3 col-md-8`}>{item?.subHeading}</div>
                                    <div className='d-flex'>
                                        <Form className='d-flex justify-content-between pt-3  '>
                                            <Form.Group className='pe-2'>
                                                <Form.Control
                                                    placeholder='Name:*'
                                                />
                                            </Form.Group>
                                            <Form.Group className='pe-2'>
                                                <Form.Control
                                                    placeholder='Email:*'
                                                />
                                            </Form.Group>
                                            <Form.Group className='pe-2'>
                                                <Form.Control
                                                    placeholder='Phone Number:*'
                                                />
                                            </Form.Group>
                                            <Form.Group className='pe-2'>
                                                <Form.Control
                                                    placeholder='City:*'
                                                />
                                            </Form.Group>
                                            <button className='btn btn-danger'>Get Started</button>
                                        </Form>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={`${styles.descriptionHeading} fw-bold d-flex justify-content-center py-5`}>{item?.descriptionHeading}</div>
                        <div className={`${styles.descriptionContainer} row px-5 pt-5`}>
                            <div className="col-md-6">
                                <Image alt="" src="/images/description-Image.jpg" />
                            </div>
                            <div className='col-md-6'>{item?.description}</div>
                        </div>
                        <div className={`${styles.packageHeading} fw-bold d-flex justify-content-center py-5 px-5`}>{item?.packageHeading}</div>
                        <div className={`${styles.packageContainer} `}>
                            <div className={`${styles.cardContainer} row d-flex justify-content-evenly`}>
                                <div className={`${styles.card} col-md-3 `}>
                                    <div className={`${styles.cardHeader}`}>
                                        <div className={`${styles.plan} text-muted fw-bold text-center pt-3`}>SILVER</div>
                                        <div className={`${styles.planPrice} fw-bold text-center`}>₹5999</div>
                                    </div>
                                    <div className={`${styles.borderBottom} mb-4`}></div>
                                    <div>
                                        {silverList?.map((item,idx) => (
                                            <div className='px-2' key={idx}>
                                                <Image src="/images/pointer.png" className='d-inline' alt="" />
                                                <span className='ps-2'>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <button className={`${styles.cardButton} btn btn-danger mt-5 mb-3 py-2 w-100`}>SELECT</button>
                                    </div>
                                </div>
                                <div className={`${styles.card} col-md-3 d-flex justify-content-between flex-column `}>
                                    <div className={`${styles.cardHeader}`}>
                                        <div className={`${styles.plan} text-muted fw-bold text-center mt-3`}>GOLD</div>
                                        <div className={`${styles.planPrice} fw-bold text-center`}>₹9999</div>
                                    </div>
                                    <div className={`${styles.borderBottom}`}></div>
                                    <div>
                                        {goldList?.map((item, idx) => (
                                            <div className='px-2' key={idx}>
                                                <Image src="/images/pointer.png" className='d-inline' alt="" />
                                                <span className='ps-2'>{item}</span>
                                            </div>
                                        ))}

                                    </div>
                                    <div>
                                        <button className={`${styles.cardButton} btn btn-danger mt-5 mb-3 py-2 w-100`}>SELECT</button>
                                    </div>
                                </div>
                                <div className={`${styles.card} col-md-3 d-flex justify-content-between flex-column`}>
                                    <div className={`${styles.cardHeader}`}>
                                        <div className={`${styles.plan} text-muted fw-bold text-center pt-3`}>PLATINUM</div>
                                        <div className={`${styles.planPrice} fw-bold text-center`}>₹29999</div>
                                    </div>
                                    <span className={`${styles.borderBottom} mb-4`}></span>
                                    <div>
                                        {platinumList?.map((item, idx) => (
                                            <div className='px-2' key={idx}>
                                                <Image src="/images/pointer.png" className='d-inline' alt="" />
                                                <span className='ps-2'>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button className={`${styles.cardButton} btn btn-danger mt-5 mb-3 py-2 w-100`}>SELECT</button>
                                </div>
                            </div>
                        </div>
                    </>))
            }
            <div className={`${styles.descriptionHeading} fw-bold d-flex justify-content-center py-3`}>Advantages of Private Limited Company Registration</div>
            <div className={`row px-5 d-flex justify-content-between mx-5 `}>
                {advantages?.map((item,idx) => (
                    <div className={`${styles.cardBox} row col-md-6 p-4 mt-4`} key={idx}>
                        <div className='col-md-2'>
                            <Image src="/images/layer.png" alt="" />
                        </div>
                        <div className='col-md-10'>
                            <div className={`${styles.advHeading} fw-bold`}>{item?.heading}</div>
                            <div>{item?.desc}</div>
                        </div>
                    </div>))}
            </div>
            <div className={`${styles.descriptionHeading} fw-bold d-flex justify-content-center py-3`}>Documents required to register a Private Limited Company
            </div>
            <div className='row d-flex justify-content-between mx-5 px-5'>
                {
                    documents?.map((item) => (
                        <>
                            <div className={`${styles.documentCard} py-3 row col-md-3 mt-2 `}>
                                <div className='d-flex justify-content-center'>
                                    <Image src={item?.image} alt="" />
                                </div>
                                <div className={`${styles.documentHeading} fw-bold d-flex justify-content-center mt-2`}>{item?.heading}</div>
                                <div className='px-4 py-2 text-center'>{item?.desc}</div>
                            </div>
                        </>))
                }
            </div>
            <div className={`${styles.descriptionHeading} d-flex justify-content-center fw-bold py-3`}>Process to Register a Company in India</div>
            <div className='d-flex justify-content-center pe-5'>
                <div className='d-flex text-center pe-5'>
                    <div className='d-flex flex-column justify-content-evenly align-items-end'>
                        {
                            progressBar?.map((item, index) => (
                                <>
                                    <div><span className='pe-2'
                                    >{item?.detail}</span></div>
                                </>
                            ))
                        }
                    </div>
                    <div className='d-flex justify-content-center flex-column align-items-center pe-5'>
                        {
                            progressBar?.map((item, index) => (
                                <>
                                    <div className='d-flex flex-column justify-content-center'>
                                        <div><Image alt="" src="/images/line.png" className='ms-2' /></div>
                                        <div className='d-flex'>

                                            <div><Image alt="" src="/images/substract.png" className='d-inline' /></div>
                                            <div ><Image alt="" src="/images/circle-ring.png" className='d-inline' /><span className='ps-2'>{item?.point}</span></div>
                                        </div>
                                        {
                                            (progressBar?.length - 1 === index) &&
                                            <div className='ms-2'>
                                                <Image alt="" src="/images/line.png" />
                                            </div>
                                        }
                                    </div>

                                </>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* <Footer/> */}
        </>
    )
}
