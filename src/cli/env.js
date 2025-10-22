const parseEnv = () => {
  // let i = 1;
  let envArr = [];
  for (const [key, value] of Object.entries(process.env)) {
    
    if (key.startsWith('RSS_')) {
      envArr.push(`${key}=${value}`);
      // console.log(`${key}=${value}`);
      // i++
    }
  }
  console.log(envArr.join('; '));
};

parseEnv();


