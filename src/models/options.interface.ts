import { CoordinatesFormat } from './coordinates/coordinates-format.enum';
import { IRad2 } from './rad-2.interface';

export interface HaversineOptions {
    unit: 'km' | 'mile' | 'meter' | 'nmi';
    format: CoordinatesFormat;
    threshold: number;
}