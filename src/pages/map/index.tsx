import {StyleContainerMap, StyleContainerOptions, StyleContainer} from "./styles"
import { StyleButtom} from "../../components/button/style"
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
import {useEffect, useState} from "react"

export const Map = () => {
    const [location, setLocation] = useState<{
        lat : number | undefined, 
        lon : number |undefined}>({lat: undefined, lon : undefined })

    useEffect(()=>{
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLocation({lat : position.coords.latitude, lon : position.coords.longitude});
              });
        }
    }, [])

    return (
        <StyleContainer>
             <StyleContainerMap>
                {location.lat && location.lon && (
                 <MapContainer center={[location.lat, location.lon]} zoom={16} style={{height : "100%", width : "100%"}}>
                 <TileLayer
                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                 />
                 <Marker position={[51.505, -0.09]}>
                     <Popup>
                     A pretty CSS3 popup. <br /> Easily customizable.
                     </Popup>
                 </Marker>
             </MapContainer>
            )}
            </StyleContainerMap>
            <StyleContainerOptions>
                <StyleButtom $width="80%">SOLICITAR AJUDA</StyleButtom>                
            </StyleContainerOptions>
        </StyleContainer>
       
    )
}