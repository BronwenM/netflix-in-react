import { Accordion } from '../../Accordion';
import { Button } from '../../Button';
import { Input } from '../../Input';
import './styles.css';

export const HomePage = () => {
    return(
        <div>
            <Button text="Primary" type="primary" isDisabled={false} action={() => alert("Button Clicked")}></Button>
            <Button text="Secondary" type="secondary" isDisabled={false} action={() => alert("Button Clicked")}></Button>
            <Accordion title="Test" body="hello world"/>
            <Input type="email" name="email" isRequired={true} placeholder="Enter email here..." cta="Get Started"/>
        </div>
    )
}