import path from "path";
import { createWriteStream } from "fs";
import { pipeline } from "stream/promises";

const write = async () => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "streams",
    "files",
    "fileToWrite.txt"
  );
  const stream = createWriteStream(filePath, { encoding: "utf8" });
  try {
    await pipeline(process.stdin, stream);
    console.log("Pipeline succeeded.");
  } catch (error) {
    console.error("Pipeline failed", error);
  }
};

await write();

