type Undefined = <T>(x?: T) => x is NonNullable<typeof x>;

/**
 * Filter helper to check for undefined OR null values
 * @param x item to check
 * @returns boolean
 */
export const Undefined: Undefined = (x): x is NonNullable<typeof x> => x !== null && x !== undefined;
