import type { JSX } from 'solid-js';
export interface NumberFormatValues {
    formattedValue: string;
    value: string;
    floatValue?: number;
}
export interface SourceInfo {
    event?: Event;
    source: 'event' | 'prop' | 'increment' | 'decrement' | string;
}
export type OnValueChange = (values: NumberFormatValues, sourceInfo: SourceInfo) => void;
export type NumberFormatBaseProps = {
    value?: string | number | null;
    defaultValue?: string | number | null;
    onValueChange?: OnValueChange;
    format?: (value: string) => string;
    removeFormatting?: (value: string) => string;
    onBlur?: JSX.EventHandler<HTMLInputElement, FocusEvent>;
    isAllowed?: (values: NumberFormatValues) => boolean;
    onKeyDown?: JSX.EventHandler<HTMLInputElement, KeyboardEvent>;
    step?: number;
    min?: number;
    max?: number;
} & Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onValueChange' | 'onBlur'>;
export type NumericFormatProps = NumberFormatBaseProps & {
    prefix?: string;
    suffix?: string;
    decimalSeparator?: string;
    decimalScale?: number;
    thousandSeparator?: string | boolean;
    thousandsGroupStyle?: 'thousand' | 'lakh' | 'wan' | 'none';
    allowNegative?: boolean;
    fixedDecimalScale?: boolean;
};
export type PatternFormatProps = NumberFormatBaseProps & {
    format: string;
    patternChar?: string;
    mask?: string;
};
