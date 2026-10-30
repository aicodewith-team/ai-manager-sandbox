import assert from "node:assert/strict";
import { test } from "node:test";
import { greet } from "./index.js";

test("greet 返回带名字的问候", () => {
  assert.equal(greet("AI Manager"), "Hello, AI Manager!");
});

// Phase 2 验证临时注入：故意让 test 失败，用来验证 Manager 的「CI 失败 → 自动返工 → 达上限 blocked」。
test("临时失败（验证后删除）", () => {
  assert.equal(1, 2);
});
