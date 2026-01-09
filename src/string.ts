type StringValidationOptions = {
    lengthMin?: number;
    lengthMax?: number;
};

const DefaultStringValidationOptions = {
    lengthMin: 1,
    lengthMax: Number.MAX_SAFE_INTEGER,
} satisfies StringValidationOptions;

/**
 * Checks that a string exists, contains non-whitespace characters, and conforms to validation params
 * @param {string} str string to validate
 * @param {StringValidationOptions} [options={lengthMin: 1, lengthMax: Number.MAX_SAFE_INTEGER}] additional validation parameters
 * @returns true if string is valid, false otherwise
 */
export const ValidateString = (
    str: string | undefined | null,
    {
        lengthMin = DefaultStringValidationOptions.lengthMin,
        lengthMax = DefaultStringValidationOptions.lengthMax,
    }: StringValidationOptions = DefaultStringValidationOptions
): str is string => {
    if (str === null || str === undefined || !str.length) {
        return false;
    }

    if (str.trim().length < lengthMin || str.length > lengthMax) {
        return false;
    }

    return true;
};
