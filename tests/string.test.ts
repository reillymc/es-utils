import assert from "node:assert";
import { describe, it } from "node:test";

import { ValidateString } from "../src/string.ts";

describe("Validate String Function", () => {
    it("should return invalid for undefined", () => {
        const expected = false;
        const actual = ValidateString(undefined);
        assert.equal(actual, expected);
    });

    it("should return invalid for null", () => {
        const expected = false;
        const actual = ValidateString(null);
        assert.equal(actual, expected);
    });

    it("should return invalid for whitespace", () => {
        const expected = false;
        const actual = ValidateString("\n ");
        assert.equal(actual, expected);
    });

    it("should return invalid by default for length 0", () => {
        const expected = false;
        const actual = ValidateString("");
        assert.equal(actual, expected);
    });

    it("should return valid when at default minimum length", () => {
        const expected = true;
        const actual = ValidateString("1");
        assert.equal(actual, expected);
    });

    it("should return valid when above specified minimum length", () => {
        const expected = true;
        const actual = ValidateString("123", { lengthMin: 2 });
        assert.equal(actual, expected);
    });

    it("should return invalid when above specified maximum length", () => {
        const expected = false;
        const actual = ValidateString("12", { lengthMax: 1 });
        assert.equal(actual, expected);
    });
});
