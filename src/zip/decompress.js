import { pipeline } from "stream/promises";
import { createReadStream } from "fs";
import { createWriteStream } from "fs";
import { unlink } from "fs/promises";
import zlib from "zlib";
import path from "path";

const decompress = async () => {
  const inputFile = path.join(
      process.cwd(),
      "src",
      "zip",
      "files",
      "archive.gz"
    );
  const outputFile = path.join(
    process.cwd(),
    "src", 
    "zip", 
    "files", 
    "fileToCompress.txt")
  const gzip = zlib.createGunzip();
    try{
      await pipeline(
        createReadStream(inputFile),
        gzip,
        createWriteStream(outputFile)
      );
      await unlink(inputFile);
      }catch(err){
        throw err;
    }
};

await decompress();
