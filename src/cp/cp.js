import { spawn } from "child_process";
import path from "path";


const spawnChildProcess = async (args) => {
  const scriptPath = path.join(process.cwd(), "src", "cp", "files", "script.js");
  const child = spawn("node", [scriptPath, ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  child.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
  });


};

// Put your arguments in function call to test this functionality
spawnChildProcess( ["someArgument1", "someArgument2", "someArgument3"] );
