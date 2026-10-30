import assert from "node:assert/strict";
import { test } from "node:test";
import { greet } from "./index.js";

test("greet 返回带名字的问候", () => {
  assert.equal(greet("AI Manager"), "Hello, AI Manager!");
});
