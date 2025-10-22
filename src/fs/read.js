import { access, readFile } from "fs/promises";
import path from "path";
import { constants } from "fs";

const read = async () => {
    const filePath = path.join(
      process.cwd(),
      "src",
      "fs",
      "files",
      "fileToRead.txt"
    );
  
    try{
      await access(filePath, constants.F_OK);
      } catch(err){
      throw new Error("FS operation failed");
    }
    const data = await readFile(filePath, { encoding: "utf8" });
    console.log(data);
};

await read();
