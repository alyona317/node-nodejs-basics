import path from "path";
import { createReadStream } from "fs";
import { createHash } from "crypto";


const calculateHash = async () => {
  const filePath =path.join(process.cwd(), "src", "hash", "files", "fileToCalculateHashFor.txt");

  return new Promise((resolve, reject) => {
  const hash = createHash("sha256");
  const stream = createReadStream(filePath);
  stream.on("data", (data) => {
    hash.update(data);
  });
  stream.on("end", () => {
    const sha256Hash = hash.digest("hex");
    console.log(`SHA-256 хеш: ${sha256Hash}`);
    resolve(sha256Hash);
  });
  stream.on("error", (error) => {
    reject(error);
  });
  })
};

await calculateHash();
