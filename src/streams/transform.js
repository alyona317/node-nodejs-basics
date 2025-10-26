import { pipeline } from "stream/promises";
import { Transform } from "stream";

const transform = async () => {

  const reverseTransform = new Transform({
    transform(chunk, _endcoding, callback) {
      const reverseChunck = chunk.toString().split("").reverse().join("");
      callback(null, reverseChunck)
    }
  })
  await pipeline(process.stdin, reverseTransform, process.stdout);
};

await transform();
