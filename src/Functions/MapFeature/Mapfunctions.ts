import { GoogleMap } from "../../Types/map-types";

import { initMap } from '../../Functions/MapFeature/initMap'
import { addHomeMarker } from "./MarkerFunctions";

export const startMap = (map:GoogleMap | undefined, setMap:Function, ref:object, props:object, setHomeMarker:Function): void => {
  if (!map) {
      defaultMapStart(setMap, ref, props);
  } else {
      const homeLocation = new google.maps.LatLng(49.166013499, -123.3698147);
      setHomeMarker(addHomeMarker(homeLocation, map));
  }
};


export const defaultMapStart = (setMap:Function, ref:object, props:object): void => {
  const defaultAddress = new google.maps.LatLng(49.166013499, -123.3698147);
  initMap(4, defaultAddress, ref, setMap, props);
};

