import { CoordinatesFormat } from './coordinates-format.enum';
declare type LatLonArray = [number, number];
declare type LatLonObject = {
    lat: number;
    lon: number;
};
declare type AbstractGeoJson = {
    geometry: {
        coordinates: number[];
    };
};
export declare class Coordinates {
    latitude: number;
    longitude: number;
    format: CoordinatesFormat;
    constructor(value: LatLonArray | LatLonObject | AbstractGeoJson, format: CoordinatesFormat);
}
export {};
