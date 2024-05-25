import { execSync } from "child_process";
import os from "os";

const resources = ["models"];

if (os.platform() === "win32") {
  for (let path of resources) {
    if (path)
      execSync(
        `powershell -Command "Copy-Item -Path "${path}" -Destination "dist/${path}" -Recurse -Force"`,
        { stdio: "inherit" }
      );
  }
} else {
  for (let path of resources) {
    if (path) execSync(`mkdir -p dist/${path} && cp -r ${path}/* dist/${path}`);
  }
}
