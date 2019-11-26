"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coordinates_format_enum_1 = require("./coordinates-format.enum");
class Coordinates {
    constructor(value, format) {
        this.format = format;
        switch (format) {
            case coordinates_format_enum_1.CoordinatesFormat.LON_LAT_OBJECT:
            case coordinates_format_enum_1.CoordinatesFormat.LAT_LON_OBJECT:
                this.latitude = value.lat;
                this.longitude = value.lon;
                break;
            case coordinates_format_enum_1.CoordinatesFormat.LAT_LON_ARRAY:
                this.latitude = value[0];
                this.longitude = value[1];
                break;
            case coordinates_format_enum_1.CoordinatesFormat.LON_LAT_ARRAY:
                this.longitude = value[0];
                this.latitude = value[1];
                break;
            case coordinates_format_enum_1.CoordinatesFormat.GEOJSON:
                this.latitude = value.geometry.coordinates[0];
                this.longitude = value.geometry.coordinates[1];
                break;
            default:
                this.latitude = 0;
                this.longitude = 0;
        }
    }
}
exports.Coordinates = Coordinates;
