const express = require('express');
const router = express.Router();
const cmd = require('node-cmd');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

function formatLines(data) {
  const lines = data.split('\n');
  const first = lines.shift();
  const keys = first.replace(/\s+/g, ' ').split(' ');
  const objs = lines.filter(l => !!l).map(l => {
    const o = {};
    const line = l.replace(/\s+/g, ' ').split(' ');
    keys.forEach((k, i) => {
      o[k] = line[i];
    });
    return o;
  });
  return objs;
}
router.get('/api/swarmService', (req, res, next) => {
  cmd.get('docker service ls', (data) => {
    res.send(formatLines(data));
  });
});

router.get('/api/swarmNode', (req, res, next) => {
  cmd.get('docker node ls', (data) => {
    res.send(formatLines(data));
  });
});

router.get('/api/swarmService/:name', (req, res, next) => {
  cmd.get(`docker service inspect ${req.params.name}`, (data) => {
    res.send(JSON.parse(data));
  });
});

router.delete('/api/swarmService/:name', (req, res, next) => {
  cmd.get(`docker service rm ${req.params.name}`, (data) => {
    res.send(JSON.parse(data));
  });
});

module.exports = router;
