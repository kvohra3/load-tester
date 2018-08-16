const execSync = require('child_process').execSync;
const url = process.argv[2];
const runs = process.argv[3] || 1;

const runLighthouse = (url, i) => {
 execSync(`lighthouse ${url} --output json > data${i}.json `);
}
for (let i = 0; i < runs ; i++) {
  console.log(`Running lighthouse test ${i} on ${url}`)
  runLighthouse(url, i);
  console.log('----------------------------------------')
}