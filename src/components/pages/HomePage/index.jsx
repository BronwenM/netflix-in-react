import { Accordion } from '../../Accordion';
import { Button } from '../../Button';
import { Dropdown } from '../../Dropdown';
import { Input } from '../../Input';
import './styles.css';
import heroImage from '../../../assets/header-background.jpg';

export const HomePage = () => {
    return(
        <div>
            <Button text="Primary" type="primary" isDisabled={false} action={() => alert("Button Clicked")}></Button>
<Button text="Secondary" type="secondary" isDisabled={false} action={() => alert("Button Clicked")}></Button>
<Accordion title="Test" body="hello world"/>
<Input type="email" name="email" isRequired={true} placeholder="Enter email here..." cta="Get Started"/>
<Dropdown name="language" option={["English", "French", "Spanish"]}/>
        </div>
    )
}