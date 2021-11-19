import { Accordion } from '../../Accordion';
import { Button } from '../../Button';
import './styles.css';

export const HomePage = () => {
    return(
        <div>
            <Button text="Primary" type="primary" isDisabled={false} action={() => alert("Button Clicked")}></Button>
            <Button text="Secondary" type="secondary" isDisabled={false} action={() => alert("Button Clicked")}></Button>
            <Accordion title="Test" body="hello world"/>
        </div>
    )
}