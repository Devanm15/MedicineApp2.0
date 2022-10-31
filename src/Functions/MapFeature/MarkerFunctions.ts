
import { GoogleMap, GoogleLatLng, GoogleMarker } from "../../Types/map-types";
import marker from '../../assets/images/quill-pen.png';

export const addHomeMarker = (location: GoogleLatLng, map:GoogleMap | undefined): GoogleMarker => {
  const homeMarkerConst:GoogleMarker = new google.maps.Marker({
      position: location,
      map: map,
      icon: {
          url: marker,
          scaledSize : new google.maps.Size(22, 32),
      }
  });

  homeMarkerConst.addListener('click', () => {
      map?.panTo(location);
      map?.setZoom(1);
  });

  return homeMarkerConst;
};


export const addMarker = (location: GoogleLatLng, map:GoogleMap | undefined, setGoogleMarkers:Function, homeMarker:any ): void => {
  const marker:GoogleMarker = new google.maps.Marker({
      position: location,
      map: map,
    
  });

  

  setGoogleMarkers((googleMarkers:any) => [...googleMarkers, marker]);

}