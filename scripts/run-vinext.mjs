import { spawn } from "node:child_process";
import { resolve } from "node:path";

const task = process.argv[2] ?? "dev";
const cli = resolve(process.cwd(), "node_modules", "vinext", "dist", "cli.js");
const environment = {
  ...process.env,
  WRANGLER_LOG_PATH: ".wrangler/wrangler.log",
};

const child = spawn(process.execPath, [cli, task], {
  env: environment,
  stdio: "inherit",
});

child.on("exit", (code) => process.exit(code ?? 1));
