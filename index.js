function mooncakeSays(message) {
  let mooncake = "(o.o)";

  if (!message) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}

const whiteColor = "#fff";
module.exports.mooncakeSays = mooncakeSays;
