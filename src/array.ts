export const EnsureArray = <T>(x: T | T[]): T[] => (Array.isArray(x) ? x : [x]);
