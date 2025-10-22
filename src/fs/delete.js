import { access, unlink } from "fs/promises";
import path from "path";
import { constants } from "fs";

const remove = async () => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "fs",
    "files",
    "fileToRemove.txt"
  );

  try{
    await access(filePath, constants.F_OK);
    await unlink(filePath)
    }catch(err){
      throw new Error("FS operation failed");
  }
};

await remove();

