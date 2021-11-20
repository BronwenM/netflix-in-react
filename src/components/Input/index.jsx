import './styles.css';
import {BsChevronRight} from 'react-icons/bs'

export const Input = (props) => {
    
    const {type, isRequired, name, placeholder, label, cta, ctaAction} = props;
    
    return (
        <div className="input-group">
            {label && <label htmlFor={name}>{label}</label>}
            <input type={type} required={isRequired} name={name} placeholder={placeholder}/>
            {cta && <button onClick={ctaAction} className="cta">{cta}<BsChevronRight className="icon"/></button>}
        </div>
    )
}
