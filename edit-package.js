const editJson = require('edit-json-file');
const pk = editJson('./package.json');
pk.unset('homepage');
pk.save();
console.info('--------------package.json-----------------');
console.info(pk.get());
console.info('--------------package.json-----------------');
