const lunr = require('lunr');
const fs = require('fs');

let rawdata = fs.readFileSync('text.json');
let indices = JSON.parse(rawdata);

const idx = lunr(function() {
  this.ref('name');
  this.field('text');

  indices.forEach(function (doc) {
    this.add(doc);
  }, this);
});

fs.writeFileSync('index.json', JSON.stringify(idx));
