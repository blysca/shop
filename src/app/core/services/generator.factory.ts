import { InjectionToken } from '@angular/core';
import { GenID } from './gen-id.generator';
import { GeneratorService } from './generator.service';

export const generatedString = new InjectionToken<string>('Random String');

export function GeneratorFactory(n: number): (gs: GeneratorService) => string {
    return (gs: GeneratorService): string => gs.generate(n);
}