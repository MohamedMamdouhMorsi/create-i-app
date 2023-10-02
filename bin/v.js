// Use npm ls to get the installed version of @i-app/i-app
const { exec } = require('child_process');
exec('npm ls -g @i-app/i-app --json', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error checking the installed version: ${error}`);
    return;
  }
  try {
    const installedPackages = JSON.parse(stdout);
    const iAppVersion = installedPackages.dependencies['@i-app/i-app'].version;
    console.log(`i-app version : ${iAppVersion}`);
 
  } catch (parseError) {
    console.error(`Error parsing npm ls output: ${parseError}`);
  }
});