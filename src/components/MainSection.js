import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'


export default function MainSection() {
  const [state, setState] = useState([{
    name: "company",
    value: "Private Limited Company",
  }])
  const [listState, setListState] = useState([
    {
      name: "company",
      value: "Private Limited Company",
    },
    {
      name: "company",
      value: "Limited Liability Company",
    },
    {
      name: "company",
      value: "One Person Company"
    },
    {
      name: "company",
      value: "Partnership Firm"
    },
    {
      name: "company",
      value: "Proprietorship Firm"
    },
    {
      name: "company",
      value: "Start up Registration",
    }, {
      name: "company",
      value: "MSME Registration"
    },
    {
      name: "company",
      value: "GST Registration"
    },
    {
      name: "company",
      value: "ITR Filing"
    }
  ])
  const handleList = (item) => {
    let newCompany = [...state];
    newCompany[0].name = item?.name;
    newCompany[0].value = item?.value;
    setState(newCompany);
  }
  return (
    <>
      <div class="container-fluid marketing-banner ">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-5 align-self-center text-right">
            <p class="text-white fs-6">
              Incorporating a business can be a lengthy and complicated process.
              JSD Incorporation is dedicated to empower entrepreneurs by providing excellent company formation &amp; tax filling services and peace of mind. We provide free consultation to help you make the best decisions about company formation. Company registration, Legalities, Compliance and financial services all at one place.
              Your Success is Our Success.
            </p>
          </div>
          <div class="col-lg-4 col-md-4 align-self-center">
            <div class="slider-content">
              <h1 class="text-white ">Register Your Company in 7 Days</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='mainCardContainer'>
        <div className='row cardContainer'>
          <div className='col-md-4 cardLeft'>
            {
              listState?.map((item, index) => (
                <>
                  <div name={item?.name} key={index} value={item?.value} onClick={() => handleList(item)}>{item?.value}</div>
                </>
              ))
            }
          </div>
          <div className='col-md-8 bg-white'>
            {(state[0].value == "Private Limited Company") && (<>
              <div className='fw-bold cardHeading'>Simplified Private Company Registration</div>
              <div className='py-3'>A private limited company, or LTD, is a type of privately held small/Medium business entity, in which owner liability is limited to their shares, the firm is limited to having 50 or fewer shareholders, and shares are prohibited from being publicly traded. A company becomes an independent legal structure when it incorporates JSD Corporation employs qualified company secretaries and chartered accountants, who ensure highest customer satisfaction and timely delivery of service.</div>
              <div className='fw-bold text-danger cardHeadingBolder'>Starts from ₹ 5,899 (All Inclusive)</div>
              <Form className='py-3'>
                <div className='row'>
                  <div className='col-md-6'>
                    <Form.Control
                      placeholder='Name*'
                    />
                  </div>
                  <div className='col-md-6'>
                    <Form.Control
                      placeholder='Email*'
                    />
                  </div>
                  <div className='col-md-6 mt-4'>
                    <Form.Control
                      placeholder='Phone*'
                    />
                  </div>
                  <div className='col-md-6 mt-4'>
                    <Form.Control
                      placeholder="City*"
                    />
                  </div>

                </div>
                <Button className="btn btn-danger my-3">GET STARTED</Button>
              </Form>
            </>)}
            {(state[0].value == "Limited Liability Company") && (<>
              <div className='fw-bold cardHeading'>LLP registration in 3 easy steps</div>
              <div className='py-3'>Limited Liability Partnership is a new corporate structure that combines the flexibility of a partnership and the advantages of limited liability of a company at a low compliance cost. The Limited Liability Partnership shall be a body corporate and a legal entity separate from its partners. We provide best services in limited liability partnership.</div>
              <div className='fw-bold text-danger cardHeadingBolder'>Start from ₹ 6,499 (All Inclusive)</div>
              <Form className='py-3'>
                <div className='row'>
                  <div className='col-md-6'>
                    <Form.Control
                      placeholder='Name*'
                    />
                  </div>
                  <div className='col-md-6'>
                    <Form.Control
                      placeholder='Email*'
                    />
                  </div>
                  <div className='col-md-6 mt-4'>
                    <Form.Control
                      placeholder='Phone*'
                    />
                  </div>
                  <div className='col-md-6 mt-4'>
                    <Form.Control
                      placeholder="City*"
                    />
                  </div>

                </div>
                <Button className="btn btn-danger my-3">GET STARTED</Button>
              </Form>
            </>)}
            {(state[0].value == "Partnership Firm") && (<>
              <div className='fw-bold cardHeading'>Partnership Firm</div>
              <div className='py-3'>When two or more people associate for the purpose of starting to do a business with a formal agreement (known as Partnership Deed) are called partners and this firm or company is known as Partnership Firm. In other words, a partnership is a legal relationship formed by the agreement between two or more individuals to carry on a business as co-owners.</div>
              <div className='fw-bold text-danger cardHeadingBolder'>Starts from ₹ 2 ,999 (All Inclusive)</div>
              <Form className='py-3'>
                <div className='row'>
                  <div className='col-md-6'>
                    <Form.Control
                      placeholder='Name*'
                    />
                  </div>
                  <div className='col-md-6'>
                    <Form.Control
                      placeholder='Email*'
                    />
                  </div>
                  <div className='col-md-6 mt-4'>
                    <Form.Control
                      placeholder='Phone*'
                    />
                  </div>
                  <div className='col-md-6 mt-4'>
                    <Form.Control
                      placeholder="City*"
                    />
                  </div>

                </div>
                <Button className="btn btn-danger my-3">GET STARTED</Button>
              </Form>
            </>)}
            {(state[0].value == "Proprietorship Firm") && (<>
              <div className='fw-bold cardHeading'>Register a Sole Proprietorship Firm</div>
              <div className='py-3'>Sole-Proprietorship firm also known as Sole-Trader is a type of enterprise that is owned and run by one person. It means, there is no partner but sole-proprietor can keep employees for doing works of his business. In eyes of laws, there is no distinction between Sole-proprietorship firm and Sole-proprietor.</div>
              <div className='fw-bold text-danger cardHeadingBolder'>Start from ₹ 1,749 (All Inclusive)</div>
              <Form className='py-3'>
                <div className='row'>
                  <div className='col-md-6'>
                    <Form.Control
                      placeholder='Name*'
                    />
                  </div>
                  <div className='col-md-6'>
                    <Form.Control
                      placeholder='Email*'
                    />
                  </div>
                  <div className='col-md-6 mt-4'>
                    <Form.Control
                      placeholder='Phone*'
                    />
                  </div>
                  <div className='col-md-6 mt-4'>
                    <Form.Control
                      placeholder="City*"
                    />
                  </div>

                </div>
                <Button className="btn btn-danger my-3">GET STARTED</Button>
              </Form>
            </>)}
            {(state[0].value == "Start up Registration") && (<>
              <div className='fw-bold cardHeading'>Start up Registration</div>
              <div className='py-3'>Building a brand is simply not enough, protecting and securing it is also an extremely essential step. A startup is a newly established business, started by 1 or a group of individuals. What differentiates it from other new businesses is that a startup offers a new product or service that is not being given elsewhere in the same way. We provide legal backing to your brand with Trademark registration online.</div>
              <div className='fw-bold text-danger cardHeadingBolder'>Starts from ₹ 9,999 (All Inclusive)</div>
              <Form className='py-3'>
                <div className='row'>
                  <div className='col-md-6'>
                    <Form.Control
                      placeholder='Name*'
                    />
                  </div>
                  <div className='col-md-6'>
                    <Form.Control
                      placeholder='Email*'
                    />
                  </div>
                  <div className='col-md-6 mt-4'>
                    <Form.Control
                      placeholder='Phone*'
                    />
                  </div>
                  <div className='col-md-6 mt-4'>
                    <Form.Control
                      placeholder="City*"
                    />
                  </div>

                </div>
                <Button className="btn btn-danger my-3">GET STARTED</Button>
              </Form>
            </>)}
            {(state[0].value == "MSME Registration") && (<>
              <div className='fw-bold cardHeading'>MSME Registration</div>
              <div className='py-3'>An Introduction. MSME stands for Micro, Small, and Medium Enterprises. In accordance with the Micro, Small, and Medium Enterprises Development (MSMED) Act in 2006, the enterprises are classified into two divisions. Manufacturing enterprises – engaged in the manufacturing or production of goods in any industry. We enhance the value of our clients by providing those services at affordable cost</div>
              <div className='fw-bold text-danger cardHeadingBolder'>Start from ₹ 1,299 (All Inclusive)</div>
              <Form className='py-3'>
                <div className='row'>
                  <div className='col-md-6'>
                    <Form.Control
                      placeholder='Name*'
                    />
                  </div>
                  <div className='col-md-6'>
                    <Form.Control
                      placeholder='Email*'
                    />
                  </div>
                  <div className='col-md-6 mt-4'>
                    <Form.Control
                      placeholder='Phone*'
                    />
                  </div>
                  <div className='col-md-6 mt-4'>
                    <Form.Control
                      placeholder="City*"
                    />
                  </div>

                </div>
                <Button className="btn btn-danger my-3">GET STARTED</Button>
              </Form>
            </>)}
            {(state[0].value == "GST Registration") && (<>
              <div className='fw-bold cardHeading'>GST Filing</div>
              <div className='py-3'>Income Tax Return is the form in which assesse files information about his Income and tax thereon to Income Tax Department .Anybody who is less than 60 years of age and has an annual income more than Rs 2. 5 lakh has to file income tax returns, according to the Income Tax Act. For senior citizens, the cut-off is Rs 3 lakh, and for those who are more than 80 years old, the cut off is Rs 5 lakh</div>
              <div className='fw-bold text-danger cardHeadingBolder'>Start from ₹ 999 (All Inclusive)</div>
              <Form className='py-3'>
                <div className='row'>
                  <div className='col-md-6'>
                    <Form.Control
                      placeholder='Name*'
                    />
                  </div>
                  <div className='col-md-6'>
                    <Form.Control
                      placeholder='Email*'
                    />
                  </div>
                  <div className='col-md-6 mt-4'>
                    <Form.Control
                      placeholder='Phone*'
                    />
                  </div>
                  <div className='col-md-6 mt-4'>
                    <Form.Control
                      placeholder="City*"
                    />
                  </div>

                </div>
                <Button className="btn btn-danger my-3">GET STARTED</Button>
              </Form>
            </>)}
            {(state[0].value == "ITR Filing") && (<>
              <div className='fw-bold cardHeading'>ITR Filing</div>
              <div className='py-3'>Income Tax Return is the form in which assesse files information about his Income and tax thereon to Income Tax Department .Anybody who is less than 60 years of age and has an annual income more than Rs 2. 5 lakh has to file income tax returns, according to the Income Tax Act. For senior citizens, the cut-off is Rs 3 lakh, and for those who are more than 80 years old, the cut off is Rs 5 lakh</div>
              <div className='fw-bold text-danger cardHeadingBolder'>Start from ₹ 3,540 (All Inclusive)</div>
              <Form className='py-3'>
                <div className='row'>
                  <div className='col-md-6'>
                    <Form.Control
                      placeholder='Name*'
                    />
                  </div>
                  <div className='col-md-6'>
                    <Form.Control
                      placeholder='Email*'
                    />
                  </div>
                  <div className='col-md-6 mt-4'>
                    <Form.Control
                      placeholder='Phone*'
                    />
                  </div>
                  <div className='col-md-6 mt-4'>
                    <Form.Control
                      placeholder="City*"
                    />
                  </div>

                </div>
                <Button className="btn btn-danger my-3">GET STARTED</Button>
              </Form>
            </>)}
            {(state[0].value == "One Person Company") && (<>
              <div className='fw-bold cardHeading'>One Person Company</div>
              <div className='py-3'>A One Person Company would obtain the status of a separate legal entity. Such OPC registration ensures that the entity is separate from the owner, unlike a proprietorship firm. OPC can own the assets in its own name and enter into a contract with the parties. The actions of the company are independent of the owner. This is the main benefit of OPC registration.</div>
              <div className='fw-bold text-danger cardHeadingBolder'>Start from ₹ 5,499 (All Inclusive)</div>
              <Form className='py-3'>
                <div className='row'>
                  <div className='col-md-6'>
                    <Form.Control
                      placeholder='Name*'
                    />
                  </div>
                  <div className='col-md-6'>
                    <Form.Control
                      placeholder='Email*'
                    />
                  </div>
                  <div className='col-md-6 mt-4'>
                    <Form.Control
                      placeholder='Phone*'
                    />
                  </div>
                  <div className='col-md-6 mt-4'>
                    <Form.Control
                      placeholder="City*"
                    />
                  </div>

                </div>
                <Button className="btn btn-danger my-3">GET STARTED</Button>
              </Form>
            </>)}

          </div>
        </div>
      </div>
    </>
  )
}
