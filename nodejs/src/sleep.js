function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

export default sleep;
// module.exports = sleep;
