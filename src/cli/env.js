const parseEnv = () => {
  let envArr = [];
  for (const [key, value] of Object.entries(process.env)) {
    
    if (key.startsWith('RSS_')) {
      envArr.push(`${key}=${value}`);
    }
  }
  console.log(envArr.join('; '));
};

parseEnv();


