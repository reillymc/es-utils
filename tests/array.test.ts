import assert from "node:assert";
import { describe, it } from "node:test";

import { EnsureArray } from "../src/array.ts";

describe("Ensure Array Function", () => {
    it("should return array for single item", () => {
        const expected = ["string"];
        const actual = EnsureArray("string");
        assert.deepEqual(actual, expected);
    });

    it("should return existing array, avoiding nesting", () => {
        const expected = ["string", 0];
        const actual = EnsureArray(["string", 0]);
        assert.deepEqual(actual, expected);
    });
});
