function mooncakeSays(message) {
  let mooncake = "(o.o)";

  if (!message) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}
const text = "Hello";
module.exports.mooncakeSays = mooncakeSays;
