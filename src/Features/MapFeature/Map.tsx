import React, {useEffect, useRef, useState} from 'react';
import { MapInterface, GoogleMarker, GoogleMap } from '../../Types/map-types'

import { startMap } from '../../Functions/MapFeature/Mapfunctions'

const Map = (props:MapInterface) =>{
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<GoogleMap>();
  const [homeMarker, setHomeMarker] = useState<GoogleMarker>();


useEffect(() => {
  startMap(map, setMap, ref, props, setHomeMarker)

}, [map, props]);



  return(
      <div ref={ref} className="map-container__map"></div>
  )
}

export default Map;