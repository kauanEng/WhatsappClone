import React from 'react';
import './Login.css';
import Api from '../Api';


import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';


export default ({ onReceive }) => {
    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();
        if (result) {
            onReceive(result.user);
        } else {
            alert("Erro!");
        }
    }

    return (  
            <div className="btn-wrap">
                <div className="login">
                    <button onClick={handleFacebookLogin}>Entrar com o Facebook</button>
                </div>
                <div className="icones-container">
                    <WhatsAppIcon />
                    <GitHubIcon />
                    <TelegramIcon />
                    <InstagramIcon />
                </div>
            </div>


    );
}








