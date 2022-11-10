function mooncakeSays(message) {
  let mooncake = "(o.o)";

  if (!message) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}
const currentYear = new Date().getFullYear();

module.exports.mooncakeSays = mooncakeSays;
