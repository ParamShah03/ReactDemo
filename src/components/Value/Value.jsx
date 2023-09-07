import React, { useState } from 'react';
import data from '../../utils/accordion';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import { motion } from 'framer-motion';

const Value = () => {
    function Component() {
        const { scrollYProgress } = useScroll();

        return (
            <motion.div style={{ scaleX: scrollYProgress }} />
        )
    }

    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left side */}
                <div className="v-left">
                    <motion.div className="image-container"
                        initial={{ x: "-7rem", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, type: "spring" }}
                    >
                        <img src="./value.png" alt="value" />
                    </motion.div>
                </div>

                {/* right side */}
                <div className="flexColStart v-right">
                    <span className='orangeText'>
                        Our Value
                    </span>
                    <span className='primaryText'>
                        Value we give to you
                    </span>
                    <span className='secondaryText'>
                        We are always ready to help by providing the best services for you
                        <br />
                        We believe a good place to live can make your life better
                    </span>
                    <Accordion className='accordion' allowMultipleExpanded={false} preExpanded={[0]}>
                        {
                            data.map((item, i) => {
                                const [className, setClassName] = useState(null);

                                return (
                                    <motion.div
                                        initial={{opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 2, type: "spring" }}
                                    >
                                        <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                            <AccordionItemHeading>
                                                <AccordionItemButton className='flexCenter accordionButton'>
                                                    <AccordionItemState>
                                                        {({ expanded }) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                                                    </AccordionItemState>
                                                    <div className="flexCenter icon">
                                                        {item.icon}
                                                    </div>
                                                    <span className="primaryText">
                                                        {item.heading}
                                                    </span>
                                                    <div className="flexCenter icon">
                                                        <MdOutlineArrowDropDown size={20} />
                                                    </div>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p className="secondaryText">
                                                    {item.detail}
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </motion.div>
                                );
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Value;