export const EnsureArray = <T>(x: T | T[] | readonly T[]): T[] | readonly T[] =>
    Array.isArray(x) ? x : [x as T]
