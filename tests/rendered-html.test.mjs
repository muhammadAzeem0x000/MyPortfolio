import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the finished engineering portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Muhammad Azeem/);
  assert.match(html, /Full-Stack/);
  assert.match(html, /Applied AI/);
  assert.match(html, /TracePilot/);
  assert.match(html, /SupportFlow/);
  assert.match(html, /SignalRoom/);
  assert.match(html, /MuscleBot/);
  assert.match(html, /READ-ONLY PUBLIC DEMO/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|SkeletonPreview/);
});

test("keeps the project story and public assets intact", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const order = ["TracePilot", "SupportFlow", "SignalRoom", "MuscleBot"].map((name) => page.indexOf(name));

  assert.ok(order.every((index) => index >= 0));
  assert.deepEqual([...order].sort((a, b) => a - b), order);
  assert.match(page, /tracepilot-six\.vercel\.app/);
  assert.doesNotMatch(page, /tracepilot-api\.vercel\.app/);

  await Promise.all([
    access(new URL("../public/profile.jpg", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);
});
