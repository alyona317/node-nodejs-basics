import { access, readdir } from "fs/promises";
import path from "path";
import { constants } from "fs";

const list = async () => {
   const folderPath = path.join(
     process.cwd(),
     "src",
     "fs",
     "files"
   );
 
   try{
     await access(folderPath, constants.F_OK);
     } catch(err){
      throw new Error("FS operation failed");
   }
    const files = await readdir(folderPath);
    console.log(files);
};

await list();

