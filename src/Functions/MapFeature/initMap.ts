import { GoogleLatLng } from "../../Types/map-types";

export const initMap = (zoomLevel: number, address: GoogleLatLng, ref: object, setMap:Function, props:object): void => {
if (ref['current' as keyof typeof ref]) {
    setMap(
        new google.maps.Map(ref['current' as keyof typeof ref], {
            zoom: zoomLevel,
            center: address,
            mapTypeControl: props['mapTypeControl' as keyof typeof ref],
            streetViewControl: false,
            rotateControl: false,
            scaleControl: true,
            fullscreenControl: false,
            panControl: false,
            zoomControl: true,
            gestureHandling: 'cooperative',
            mapTypeId: props['mapType' as keyof typeof ref],
            draggableCursor: 'pointer',
        })
    );
  }
}