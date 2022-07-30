import { GeneratorService } from './generator.service';
export function GeneratorFactory(n: number): string {
    return new GeneratorService().generate(n);
}