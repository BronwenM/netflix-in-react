import './styles.css';
import {FaGlobe} from 'react-icons/fa';

export const Dropdown = () => {

    return (
        <div className="dropdown-wrapper">
            <FaGlobe className="globe"/>
            <select className="dropdown">
                
                <option value="English">English</option>
                <option value="French">French</option>
            </select>
        </div>
        
    )
}