import { access, mkdir, copyFile, cp } from "fs/promises";
import path from "path";
import { constants } from "fs";


const copy = async () => {
 const srcDir = path.join(process.cwd(), "src", "fs", "files");
 const srcDir1 = path.join(process.cwd(), "src", "fs", "files_copy");

 try{
  await access(srcDir, constants.F_OK);
  }catch(err){
 throw new Error("FS operation failed");
 }
  try {
    await access(srcDir1, constants.F_OK);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === 'ENOENT') {
      await mkdir(srcDir1, {recursive: true});
      await cp(srcDir, srcDir1, { recursive: true })
    } else {
      throw new Error("FS operation failed");
    }
  }
};

await copy();
