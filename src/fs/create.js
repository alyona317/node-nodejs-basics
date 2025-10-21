import { access, writeFile } from 'fs/promises';
import { constants } from 'fs';
import path from 'path';

const create = async () => {
  const filePath = path.join(process.cwd(), 'src', 'fs', 'files','fresh.txt');
  try {
    await access(filePath, constants.F_OK);
   throw new Error('FS operation failed');
  } catch (err) {
    if (err.code === 'ENOENT'){
    await writeFile(filePath, "I am fresh and young", { encoding: "utf8" });
    return;
    }
  }
  throw new Error('FS operation failed');
};

await create();
