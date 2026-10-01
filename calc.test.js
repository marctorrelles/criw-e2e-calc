import { test } from "node:test";
import assert from "node:assert/strict";
import { add, average } from "./calc.js";

test("add", () => assert.equal(add(2, 3), 5));
test("average", () => assert.equal(average([2, 4, 6]), 4));
test("average of one", () => assert.equal(average([5]), 5));
