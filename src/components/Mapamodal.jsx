import React, { useEffect, useState } from "react";
import { ReactComponent as IconClose } from "../icons/times-circle-regular.svg";
/*
 * IMPORT DATA FROM SRC/DATA/DATA.JSON
 */
import {globalinfo} from "../data/data"

const Mapamodal = ({verMapamodal, vermapa}) => {
    const aller = {
        princ: {
            width: "100%",
            height: "100%",
            //            maxWidth: '720px',
            //            height: '100%',
            position: "fixed",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
        },
        second: {
            position: "relative",
            width: "90%",
            maxHeight: "90%",
            backgroundColor: "#fff",
            border: "2px solid #000",
            borderRadius: "20px",
            padding: "10px",
            overflow: "scroll"
        },
        close: {
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "3em"
        },
        cont_data: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "wrap"
        },
        cont_aller: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5px",
            width: "calc(100%  - 75%)"
        },
        h1 : {
            padding: '10px 0 10px 20px'
        }
    };

    // const [vermapaState, getVermapa] = useState();
    const [mostrarmapa, getMostrarmapa] = useState(false);

// console.log(mostrarmapa)

    useEffect(() => {
        // getVermapa(globalinfo);
        getMostrarmapa(verMapamodal);
    }, [verMapamodal]);
    // console.log(globalinfo)

    return (
        <div
            className={mostrarmapa ? "displayed" : "displayed_none"}
            style={aller.princ}
        >
            <div style={aller.second}>
                <IconClose style={aller.close} onClick={vermapa} />
                <h1 style={aller.h1}>
                    Esta es la localización GPS de este establecimiento.

                </h1>
                {/*<div style={aller.cont_data}>*/}
                {/*    {getVermapa.map(item => {*/}
                {/*        return (*/}
                {/*            <div*/}
                {/*                style={aller.cont_aller}*/}
                {/*                key={item.name + item.id}*/}
                {/*            >*/}
                {/*                <img*/}
                {/*                    src={item.localizacionMaps}*/}
                {/*                    alt={`Mapa del restaurante ${item.name}`}*/}
                {/*                />*/}
                {/*                <p>Mapa del local {item.name}</p>*/}
                {/*            </div>*/}
                {/*        );*/}
                {/*    })}*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Mapamodal;
