import { access} from "fs/promises";
import { rename as fsRename } from "fs/promises";
import path from "path";
import { constants } from "fs";

const rename = async () => {
  const properFilename = path.join(
    process.cwd(),
    "src",
    "fs",
    "files",
    "properFilename.md"
  );
  const wrongFilename = path.join(
    process.cwd(),
    "src",
    "fs",
    "files",
    "wrongFilename.txt"
  );
  try {await access(wrongFilename, constants.F_OK);
  } catch (err) {
    throw new Error("FS operation failed");
  }

  try {
    await access(properFilename, constants.F_OK);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fsRename(wrongFilename, properFilename);
    } else {
      throw new Error("FS operation failed");
    }
  }
};

await rename();

