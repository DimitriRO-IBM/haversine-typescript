"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coordinates_model_1 = require("./models/coordinates/coordinates.model");
const consts_1 = require("./utils/consts");
const functions_1 = require("./utils/functions");
function haversine(startCoordinates, endCoordinates, options) {
    options = options || {};
    const R = options.unit in consts_1.RADII ? consts_1.RADII[options.unit] : consts_1.RADII.km;
    const start = new coordinates_model_1.Coordinates(startCoordinates, options.format);
    const end = new coordinates_model_1.Coordinates(endCoordinates, options.format);
    const dLat = functions_1.toRad(end.latitude - start.latitude);
    const dLon = functions_1.toRad(end.longitude - start.longitude);
    const lat1 = functions_1.toRad(start.latitude);
    const lat2 = functions_1.toRad(end.longitude);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    if (options.threshold) {
        return options.threshold > (R * c);
    }
    return R * c;
}
exports.haversine = haversine;
