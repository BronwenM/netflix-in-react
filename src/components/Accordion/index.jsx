import './styles.css';
import { useState } from 'react';
import {AiOutlinePlus, AiOutlineClose} from 'react-icons/ai';
import {GrClose} from 'react-icons/gr';

export const Accordion = (props) => {
    
    const {title, body} = props;

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }
    
    return(
        <div className="accordion">
            <div className="accordion-title">
                <button onClick={toggleAccordion} className="accordion-head">
                    {title}
                    {!isOpen && <AiOutlinePlus/>}
                    {isOpen && <AiOutlineClose/>}
                </button>
            </div>
            {isOpen && 
                <div className="accordion-body">
                    {body}
                </div>
            }
        </div>
    );
}