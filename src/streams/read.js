import path from "path";
import { createReadStream} from "fs";

const read = async () => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "fs",
    "files",
    "fileToRead.txt"
  );
  const stream = createReadStream(filePath, { encoding: "utf8" });
  stream.pipe(process.stdout);
  return new Promise((resolve, reject) => {
    stream.on("end", resolve);
    stream.on("error", reject);
  })
};

await read();
