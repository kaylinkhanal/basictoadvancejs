'use client'

import { MapContainer, Marker, Polygon, Popup, Rectangle, TileLayer, Tooltip } from 'react-leaflet'
const Maps = () => {

    const rectangle = [
        [28, 84],
        [28.1, 84.1],
    ]
    return (
        <MapContainer center={[28, 84]} zoom={13} scrollWheelZoom={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <div className='absolute top-10 left-10 z-999 bg-red-400 m-4 shadow-md'>
                <h2>Select rocks</h2>
                <input type='radio' /> Metamorhip
                <input type='radio' /> Sedimentary
            </div>
            <Rectangle bounds={rectangle} pathOptions={{ color: 'black' }}>
                <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
                    permanent Tooltip for Rectangle
                </Tooltip>
            </Rectangle>

            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Maps