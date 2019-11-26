import { Coordinates } from './models/coordinates/coordinates.model';
import { HaversineOptions } from './models/options.interface';
import { RADII } from './utils/consts';
import { toRad } from './utils/functions';

export function haversine(startCoordinates: any, endCoordinates: any, options: HaversineOptions) {
    options = options || {};

    const R = options.unit in RADII ? RADII[options.unit] : RADII.km;

    const start: Coordinates = new Coordinates(startCoordinates, options.format);
    const end: Coordinates = new Coordinates(endCoordinates, options.format);

    const dLat: number = toRad(end.latitude - start.latitude);
    const dLon: number = toRad(end.longitude - start.longitude);
    const lat1: number = toRad(start.latitude);
    const lat2: number = toRad(end.longitude);

    const a: number = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);

    const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    if (options.threshold) {
        return options.threshold > (R * c);
    }

    return R * c;
}