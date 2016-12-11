const cmd = require('node-cmd');

cmd.get('docker service inspect redis', (data) => {
  const serviceData = JSON.parse(data);
  console.log('redis', serviceData);
});
