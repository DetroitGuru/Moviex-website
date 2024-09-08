import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaGithub
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {

    const handleIconClick = (socialMedia) => {
        // Perform actions based on the clicked social media icon
        switch (socialMedia) {
            case 'facebook':
                window.open('_blank');
                break;
            case 'twitter':
                window.open('_blank');
                break;
            case 'instagram':
                window.open('_blank');
                break;
            case 'linkedin':
                window.open('_blank');
                break;
            case 'github':
                window.open('https://github.com/DetroitGuru', '_blank');
                break;
            default:
                break;
        }
    };



    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem"><a href="https://privaces-polices-07.netlify.app/">Terms Of Use</a></li>
                    <li className="menuItem"> <a href="https://privaces-polices-07.netlify.app/">Privacy-Policy</a></li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem"><a href="https://privaces-polices-07.netlify.app/">FAQ
                    </a></li>
                </ul>
                <div className="infoText">
                The Moviex website is a platform dedicated to showcasing a diverse range of movies, TV shows, and other video content. It aims to provide users with an extensive collection of entertainment options, making it a one-stop destination for movie enthusiasts. The site offers a user-friendly interface, allowing visitors to easily browse and search for their favorite titles, read reviews, and access trailers. Additionally, Movix may provide information about upcoming releases and exclusive content for its users.
                     </div>
                <div className="socialIcons">
                <div className='icon' onClick={() => handleIconClick('facebook')}>
                        <FaFacebookF/>
                    </div>
                    <div className='icon' onClick={() => handleIconClick('instagram')}>
                        <FaInstagram />
                    </div>
                    <div className='icon' onClick={() => handleIconClick('twitter')}>
                        <FaTwitter />
                    </div>
                    <div className='icon' onClick={() => handleIconClick('linkedin')}>
                        <FaLinkedinIn />
                    </div>
                    <div className='icon' onClick={() => handleIconClick('github')}>
                        <FaGithub/>
                    </div>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
