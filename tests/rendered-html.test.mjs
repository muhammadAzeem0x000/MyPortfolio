import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("uses Vercel's native Next.js deployment contract", async () => {
  const [packageJson, vercelConfig] = await Promise.all([
    readFile(new URL("package.json", root), "utf8"),
    readFile(new URL("vercel.json", root), "utf8"),
  ]);

  const manifest = JSON.parse(packageJson);
  const vercel = JSON.parse(vercelConfig);

  assert.equal(manifest.scripts.build, "next build");
  assert.equal(manifest.scripts.start, "next start");
  assert.match(manifest.dependencies.next, /^16\./);
  assert.equal(vercel.framework, "nextjs");
});

test("keeps the project story, public assets, and homepage route intact", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
  ]);
  const order = ["TracePilot", "SupportFlow", "SignalRoom", "MuscleBot"].map((name) =>
    page.indexOf(name),
  );

  assert.ok(order.every((index) => index >= 0));
  assert.deepEqual([...order].sort((a, b) => a - b), order);
  assert.match(page, /tracepilot-six\.vercel\.app/);
  assert.doesNotMatch(page, /tracepilot-api\.vercel\.app/);
  assert.match(layout, /metadataBase/);

  await Promise.all([
    access(new URL("public/profile.jpg", root)),
    access(new URL("public/og.png", root)),
    access(new URL("public/thumbnails/tracepilot-mockup.png", root)),
    access(new URL("public/thumbnails/supportflow-mockup.png", root)),
    access(new URL("public/thumbnails/signalroom-mockup.png", root)),
    access(new URL("public/thumbnails/musclebot-mockup.png", root)),
  ]);

  assert.match(page, /tracepilot-mockup\.png/);
  assert.match(page, /supportflow-mockup\.png/);
  assert.match(page, /signalroom-mockup\.png/);
  assert.match(page, /musclebot-mockup\.png/);
});
