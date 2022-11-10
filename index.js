function mooncakeSays(message) {
  let mooncake = "(o.o)";

  if (!message) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}

const randomNumber = Math.floor(Math.random() * 5) + 1;
module.exports.mooncakeSays = mooncakeSays;
