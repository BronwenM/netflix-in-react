import { Accordion } from '../../Accordion';
import { Input } from '../../Input';
import './styles.css';
import heroImage from '../../../assets/header-background.jpg';
import kidsImage from '../../../assets/kids.png';
import watchEverywhere from '../../../assets/watch-everywhere.PNG';
import offline from '../../../assets/offline.PNG';
import ownTV from '../../../assets/ownTV.PNG';

import { useState } from 'react';

export const HomePage = () => {

    const [language, setLanguage] = useState("English");

    const changeLang = (language) => {
        setLanguage(language);
    }

    if(language === "English"){
        return(
            <div className="home-page">
                <div className="hero">
                    <img src={heroImage} />
                    <div className="overlay">
                        <div className="hero-text">
                            <h1>Unlimited movies, TV <br></br> shows, and more.</h1>
                            <h3>Watch anywhere. Cancel anytime.</h3>
                            <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
                            <Input type="email" name="email" isRequired={true} placeholder="Enter email here..." cta="Get Started"/>
                        </div>
                    </div>
                </div>
                
                <section>
                    <div className="ad-headers">
                        <h1>Enjoy on your TV.</h1>
                        <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                    </div>
                    <img src={ownTV}/>
                </section>
                    
                <section>
                    <img src={offline}/>
                    <div className="ad-headers">
                        <h1>Download your shows to watch offline.</h1>
                        <h3>Save your favorites easily and always have something to watch.</h3>
                    </div>
                </section>
    
                <section>
                    <div className="ad-headers">
                        <h1>Watch everywhere.</h1>
                        <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h3>
                    </div>
                    <img src={watchEverywhere}/>
                </section>
    
                <section>
                    <img src={kidsImage} alt="Kids accounts image" />
                    <div className="ad-headers">
                        <h1>Create profiles for<br></br> kids.</h1>
                        <h3>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
                    </div>
                </section>
    
                <section className="faq">
                    <h1>Frequently Asked Questions</h1>
                    <Accordion title="What is Netflix?" body="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
    
    You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"/>
                    <Accordion title="How much does Netflix cost?" body="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $18.99 a month. No extra costs, no contracts."/>
                    <Accordion title="Where can I watch?" body="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
    
    You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."/>
                    <Accordion title="How do I cancel?" body="hello world"/>
                    <Accordion title="Test" body="hello world"/>
                    <Accordion title="Test" body="hello world"/>
                    <br></br>
                    <div>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <Input type="email" name="email" isRequired={true} placeholder="Enter email here..." cta="Get Started"/>
                    </div>
                </section>
            </div>
        )
    }
    
}