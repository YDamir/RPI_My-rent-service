import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

interface MapProps {
    offers: {
        id: string;
        title: string;
        location: { latitude: number; longitude: number };
    }[];
    activeOfferId?: string;
}

const defaultIcon = L.icon({
    iconUrl: "/img/pin.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
});

const activeIcon = L.icon({
    iconUrl: "/img/pin-active.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
});

const Map: React.FC<MapProps> = ({ offers, activeOfferId }) => {
    const defaultCenter: [number, number] = offers.length > 0
        ? [offers[0].location.latitude, offers[0].location.longitude]
        : [52.370216, 4.895168];
    return (
        <MapContainer
            center={defaultCenter}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {offers.map((offer) => (
                <Marker
                    key={offer.id}
                    position={[offer.location.latitude, offer.location.longitude]}
                    icon={activeOfferId === offer.id ? activeIcon : defaultIcon}
                />
            ))}
        </MapContainer>
    );
};

export default Map;