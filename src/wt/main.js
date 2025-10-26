import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';

const performCalculations = async () => {
  const numCores = os.cpus().length;
  const workerPath = path.join(
      process.cwd(),
      "src", "wt", "worker.js"
  );

  const workerPromises = Array.from({ length: numCores }, (_, i) => {
    return new Promise((resolve) => {
      const worker = new Worker(workerPath);
      const numberToSend = 40 + i;
      worker.on('message', (result) => {
        resolve(result)
      })
      worker.on('error', (err) => {
        console.error(err);
        resolve({ status: "error", data: null})
      })
      worker.postMessage(numberToSend);
    });
  });
  const finalResults = await Promise.all(workerPromises);
  console.log(finalResults);
};

await performCalculations();
