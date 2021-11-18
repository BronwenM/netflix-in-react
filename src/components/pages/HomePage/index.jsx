import { Button } from '../../Button';
import './styles.css';

export const HomePage = () => {
    return(
        <Button text="Example" type="primary" isDisabled={false} action={() => alert("Button Clicked")}/>
    )
}