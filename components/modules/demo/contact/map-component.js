import { useEffect, useRef } from "react";
import { MapStyled } from "./styled/map-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function MapComponent({ center, zoom, styles }) {
    const mapRef = useRef();
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            var map = new window.google.maps.Map(mapRef.current, {
                center,
                zoom,
                styles,
            });
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(
                    31.208939447050287,
                    29.909858915216606
                ),
                title: "DUBAI",
                map: map,
            });
        }
        return () => (isMounted = false);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return <MapStyled ref={mapRef} id="map" />;
}

export default MapComponent;
