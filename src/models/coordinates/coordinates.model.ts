import { CoordinatesFormat } from './coordinates-format.enum';

declare type LatLonArray = [number, number];
declare type LatLonObject = { lat: number, lon: number };
declare type AbstractGeoJson = { geometry: { coordinates: number[] } };

export class Coordinates {
    latitude: number;
    longitude: number;
    format: CoordinatesFormat;

    constructor(value: LatLonArray | LatLonObject | AbstractGeoJson, format: CoordinatesFormat) {
        this.format = format;

        switch (format) {
            case CoordinatesFormat.LON_LAT_OBJECT:
            case CoordinatesFormat.LAT_LON_OBJECT:
                this.latitude = (value as LatLonObject).lat;
                this.longitude = (value as LatLonObject).lon;
                break;
            case CoordinatesFormat.LAT_LON_ARRAY:
                this.latitude = (value as LatLonArray)[0];
                this.longitude = (value as LatLonArray)[1];
                break;
            case CoordinatesFormat.LON_LAT_ARRAY:
                this.longitude = (value as LatLonArray)[0];
                this.latitude = (value as LatLonArray)[1];
                break;
            case CoordinatesFormat.GEOJSON:
                this.latitude = (value as AbstractGeoJson).geometry.coordinates[0];
                this.longitude = (value as AbstractGeoJson).geometry.coordinates[1];
                break;
            default:
                this.latitude = 0;
                this.longitude = 0;
        }
    }
}