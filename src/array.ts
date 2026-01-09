export function EnsureArray<T>(x: T | T[]): T[];
export function EnsureArray<T>(x: readonly T[]): readonly T[];
export function EnsureArray<T>(x: T | readonly T[]): readonly T[];
export function EnsureArray<T>(x: T | T[] | readonly T[]): T[] | readonly T[] {
    return Array.isArray(x) ? x : [x as T];
}
