function mooncakeSays(message) {
  let mooncake = "(o.o)";

  if (!message) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}
const currentYear = new Date().getFullYear();
const randomNumber = Math.floor(Math.random() * 5) + 1;
const whiteColor = "#fff";
module.exports.mooncakeSays = mooncakeSays;
