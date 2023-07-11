import React from "react";
import { Button, Image } from "react-bootstrap";
import styles from "../../styles/contact.module.scss";
import { Butterfly_Kids } from "next/font/google";
import {
  IconArrowRight,
  IconMail,
  IconMessage,
  IconPhone,
} from "@tabler/icons";

function Contact() {
  return (
    <>
      <div className={`${styles.contact} `}>
        <div className="bg-black container-fluid ">
          <div className="position-relative container">
            <div className={`${styles.icons}`}>
              <Image src="images/smallicon.png" alt="smallicon" />
            </div>
            <div className={`${styles.iconst}`}>
              <Image src="images/smallicontwo.png" alt="smallicon" />
            </div>
            <div className="backgroundBg row ">
              <div className="col-md-4">
                <div className={`${styles.bghead}`}>
                  <h1 className="text-white">Contacts</h1>
                  <div className="text-white">
                    <span>Home</span>
                    <span className="ms-2 mt-1">&#62;</span>{" "}
                    <span>Contacts</span>
                  </div>
                </div>
              </div>
              <div className={`col-md-8 ${styles.bgimg}`}>
                <Image
                  src="images/breadcrumbbg.png"
                  alt="background"
                  className="float-end"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="contactcards container py-3">
          <div className="row justify-content-center">
            <div className="col-md-10">
          <div className="row  justify-content-center py-5">
            <div className=" col-lg-4 col-md-3 py-3 d-flex justify-content-center  ">
              <div className="card border rounded shadow p-4">
                <div className={`${styles.locationdiv} `}>
                  <Image src="images/supportlocation.png" alt="location" />
                </div>
                <div className="contactContent text-center py-4 px-4">
                  <h4 className="py-3">Visit Us Daily</h4>
                  <p className="fw-bold">
                  〒102-0085 Tokyo, Chiyoda City, Rokubanchō, 1 5-2
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-md-3 py-3 d-flex justify-content-center  ">
              <div className="card border rounded shadow p-4">
                <div className={`${styles.locationdiv} `}>
                  <Image src="images/supportcall.png" alt="location" />
                </div>
                <div className="contactContent text-center py-3">
                  <h4 className="py-3 px-4 mx-5">Contact Us </h4>
                  <p className="px-4 fw-bold">
                  <a href='tel:+81-(0)70-8406-7217' className='text-decoration-none text-dark '>+81-(0)70-8406-7217</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-md-3 py-3 d-flex justify-content-center ">
              <div className="card border rounded shadow p-4">
                <div className={`${styles.locationdiv} `}>
                  <Image src="images/supportmsg.png" alt="location" />
                </div>
                <div className="contactContent text-center py-3 px-1">
                  <h4 className="py-3 mx-5 px-4">Email Us </h4>
                  <p>
                   <a href="mailto:rotechinfo@gmail.com" className="text-decoration-none text-dark fw-bold">info@decodingx.co.jp</a>    
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
        <div className="contactForm">
          <div className=" container">
            <div className="row justify-content-center">
              <h5 className="text-center fw-bold text-primary ">
                QUERY US
              </h5>
              <h1 className="fw-bold text-center py-5">
                Do you have questions contact us{" "}
              </h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-xl-5 col-sm-12">
                    <div>
                      <Image
                        src="images/contactimg.png"
                        alt="contactprofile"
                        className="img img-fluid"
                      />
                    </div>
                    <div className="d-flex py-2">
                      <div className="px-2">
                        <div className={`${styles.msgdiv}`}>
                          <IconMail color="white" />
                        </div>
                      </div>
                      <div className="pt-2 px-2">
                        <a href="#" className="">
                          info@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="d-flex py-2">
                      <div className=" px-2">
                        <div className={`${styles.msgdiv}`}>
                          <IconPhone color="white" />
                        </div>
                      </div>
                      <div className="px-2">
                        <a href="#">+1255-568-6523</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 col-sm-12">
                    <div className=" bg-white p-5 rounded shadow">
                      <div className="form px-2 py-3 col-6">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="border rounded  py-2 px-3 my-2"
                        />
                        <input
                          type="text"
                          placeholder="Your Email"
                          className="border rounded py-2 px-3 my-2"
                        />
                        <input
                          type="text"
                          placeholder="Your Phone"
                          className="border rounded py-2 px-3 my-2"
                        />
                        <textarea
                          type="text"
                          placeholder="Your name"
                          className="textareas border rounded py-2 px-3 my-2"
                        />
                        <Button className="">Submit Here</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.3340282856257!2d139.73194294044603!3d35.686054852482535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188dcf165866c1%3A0xb7e2674810d82c5d!2zSUZT5Zub44OE6LC35YWt55Wq55S6!5e0!3m2!1sen!2sjp!4v1682664742331!5m2!1sen!2sjp" 
            width="100%"
            height="500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
