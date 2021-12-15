function prettyPrint(data) {
  const str = JSON.stringify(data, null, 2);
  return str;
}

module.exports.prettyPrint = prettyPrint;
