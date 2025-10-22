const parseArgs = () => {
   const argv = process.argv.slice(2);
   const result = [];
   for (let i = 0; i < argv.length; i += 2) {
     const keyRaw = argv[i];
     const val = argv[i + 1];
     const key = keyRaw.startsWith("--") ? keyRaw.slice(2) : keyRaw;
     result.push(`${key} is ${val}`);
   }
   console.log(result.join(", "));
};

parseArgs();
