import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
import {ReactComponent as LogoComanda} from "../icons/logo.svg";

/*
*
*  IMPORT COMPONENTS
*
* */
import Socialpymes from "./Socialpymes";
import Binicio from "./Binicio";

const Launch = () => {

    const styles = {
        princ: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            padding: '1em'
        },
        cont_logo: {
            // position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1em',
            marginBottom: '2em'
        },
        cont_logo_text: {
            position: 'absolute',
            left: '6em',
            top: '4em',
            overflow: 'visible',
            display: 'flex',
            flexDirection: 'column',
        },
        image_logo: {
            width: '7em',
            height: '7em'
        },
        logo_size: {
            width: '300px',
            margin: '0 auto',
            position: 'relative'
        },
        span_comanda_text: {
            textAlign: 'right',
            fontFamily: 'Papyrus',
            marginTop: '-.8em',
            fontSize: '.8em'
        },
        span_tu_carta: {
            fontSize: '1.5em',
            fontFamily: 'Papyrus'
        },
        image_princ: {
            filter: `drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.361))`,
            overflow: 'visible',
            maxWidth: '90%',
            marginBottom: '2em'
        }

    }

    return (
        <div style={styles.princ}>
            <div style={styles.cont_logo}>
                <div style={styles.logo_size}>
                    <div style={styles.cont_logo_text}>
                        <span style={styles.span_tu_carta}>Tu carta digital</span>
                        <span style={styles.span_comanda_text}>ComandApp</span>
                    </div>
                    <LogoComanda style={styles.image_logo} alt="Logo de ComandaApp"/>
                </div>
            </div>
            <img style={styles.image_princ} src="./assets/img/restaurant_691397_1280.png" alt="Imagen de inicio"/>
            <Binicio/>
            <Socialpymes/>
        </div>
    )
};

export default Launch;

