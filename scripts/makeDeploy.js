import { mkdir, copyFile, cp } from "fs/promises";
import { join, resolve } from "path";

try {
  const baseDir = resolve();
  const deployDir = join(baseDir, "deploy");

  console.log("baseDir", baseDir);
  console.log('deployDir', deployDir)

  await mkdir(deployDir);

  await cp(
    join(baseDir, "package.json"),
    join(deployDir, "package.json")
  );

  await mkdir(join(deployDir, "backend"));

  await cp(
    join(baseDir, "backend"), 
    join(deployDir, "backend"), 
    {
    recursive: true,
  });

  await cp(
    join(baseDir, "node_modules"), 
    join(deployDir, "node_modules"), 
    {
    recursive: true,
  });

  await cp(
    join(baseDir, "frontend", "dist"),
    join(deployDir, "frontend", "dist"),
    { recursive: true }
  );

} catch (err) {
  console.error(err);
}
