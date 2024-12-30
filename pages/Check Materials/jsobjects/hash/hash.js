export default {
  md5(Input) {
    var md = forge.md.md5.create();
    md.update(Input);
    return md.digest().toHex();
  },
};