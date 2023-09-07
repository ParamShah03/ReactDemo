import React from 'react';
import './Contact.css'
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';
import { motion } from 'framer-motion';


const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* left side */}
                <div className="flexColStart c-left">
                    <span className='orangeText'>
                        Our Contacts
                    </span>
                    <span className='primaryText'>
                        Easy to contact us
                    </span>
                    <span className='secondryText'>
                        We always ready to help you by the best services for you. We beleive a good place to live can make your life better.
                    </span>
                    <div className='flexColStart contactModes'>
                        {/* first row */}
                        <div className="flexStart row">
                            <motion.div className="flexColCenter mode"
                                initial={{ size: 0, opacity: 0 }}
                                whileInView={{ size: "100%", opacity: 1 }}
                                transition={{ duration: 1, type: "ease-in" }}
                            >
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Call now
                                </div>
                            </motion.div>
                            <motion.div className="flexColCenter mode"
                                initial={{ size: 0, opacity: 0 }}
                                whileInView={{ size: "100%", opacity: 1 }}
                                transition={{ duration: 1, type: "ease-in" }}
                            >
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Chat now
                                </div>
                            </motion.div>
                        </div>

                        {/* second row */}
                        <div className="flexStart row">
                            <motion.div className="flexColCenter mode"
                                initial={{ size: 0, opacity: 0 }}
                                whileInView={{ size: "100%", opacity: 1 }}
                                transition={{ duration: 1, type: "ease-in" }}
                            >
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Video Call</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Video Call now
                                </div>
                            </motion.div>
                            <motion.div className="flexColCenter mode"
                                initial={{ size: 0, opacity: 0 }}
                                whileInView={{ size: "100%", opacity: 1 }}
                                transition={{ duration: 1, type: "ease-in" }}
                            >
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Message now
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className="c-right">
                    <motion.div className="image-container"
                        initial={{ scale: 0.6,opacity: 0.2 }}
                        whileInView={{ scale: 1 ,opacity: 1 }}
                        transition={{ duration: 2, type: "ease-in" }}
                    >
                        <img src="./contact.jpg" alt="contact" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;