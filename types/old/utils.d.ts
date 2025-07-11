import type { OnValueChange, NumberFormatValues, SourceInfo } from './types';
export declare function noop(): void;
export declare function isNil(val: any): val is null | undefined;
export declare function useInternalValues(valueProp: () => string | number | null | undefined, defaultValue: string | number | null | undefined, removeFormatting: (value: string) => string, format: (value: string) => string, onValueChange?: OnValueChange): [() => string, (values: NumberFormatValues, sourceInfo: SourceInfo) => void];
export declare function applyThousandSeparator(numStr: string, thousandSeparator: string, thousandsGroupStyle: string): string;
export declare function padDecimal(numStr: string, scale: number): string;
