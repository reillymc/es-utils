import assert from "node:assert";
import { describe, it } from "node:test";

import { Undefined } from "../src/symbol.ts";

describe("Undefined Function", () => {
    it("should filter undefined and null from given array", () => {
        const expected = ["string", 0, 1, false, {}, []];
        const actual = ["string", undefined, 0, 1, null, false, {}, [], undefined].filter(Undefined);
        assert.deepEqual(actual, expected);
    });
});
