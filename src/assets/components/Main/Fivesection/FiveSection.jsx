import React from 'react'
import './fiveSection.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const FiveSection = () => {
    return (
        <div>
            <div className="fivesec-box">
                <div className="fivesec-box2">
                    <iframe
                        allowFullScreen={true}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.544618951696!2d49.8315564762873!3d40.39678427144272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d8bf9bc7b13%3A0x314313e3411891a8!2sHamburg%20Academy%20Alman%20dili%20Merkezi!5e0!3m2!1sen!2saz!4v1735134237983!5m2!1sen!2saz"
                        width="500"
                        height="620"

                    />

                    <div className="fivesec-box3">
                        <p><span className='contact'>Contact Us</span> & Get In <span className='touch'>Touch</span></p>
                        <input className='name' type="name" placeholder='Your Name...' />
                        <input className='surname' type="name" placeholder='Your Surname...' />
                        <input className='email' type="name" placeholder='Your E-mail...' />
                        <input className='subject' type="name" placeholder='Subject...' />
                        <textarea style={{
                            minWidth: "36.5rem",
                        }} className='message' name="message" id="message" placeholder='Your Message'></textarea>
                        <button>Send Message Now</button>

                        <div className="public">
                            <div className="telephone">
                                <BsFillTelephoneFill />
                                <h3>010-020-0340</h3>
                            </div>

                            <div className="envelope">
                                <FaEnvelope />
                                <h3>info@company.com</h3>
                            </div>

                            <div className="location">
                                <FaLocationPin />
                                <h3> Sunny Isles Beach, FL 33160, United States</h3>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="tegs">
                <p className='copyright'>Copyright © 2036 Tale SEO Agency. All rights reserved.</p>
                <p className='design'>Design: TemplateMo</p>
            </div>

        </div>
    )
}

export default FiveSection