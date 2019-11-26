import { CoordinatesFormat } from './coordinates/coordinates-format.enum';
export interface HaversineOptions {
    unit: 'km' | 'mile' | 'meter' | 'nmi';
    format: CoordinatesFormat;
    threshold: number;
}
