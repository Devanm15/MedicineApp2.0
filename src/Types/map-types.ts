export interface MapInterface {
  mapType: google.maps.MapTypeId;
  mapTypeControl?: boolean;
}
export interface MarkerInterface {
  address: string;
  latitude: number;
  longitude: number;
}

export type GoogleLatLng = google.maps.LatLng;
export type GoogleMap = google.maps.Map;
export type GoogleMarker = google.maps.Marker;