const newLocal = "postcss-nesting";
module.exports = {
  plugins: ["tailwindcss", newLocal, "autoprefixer"],
};

//Just for testing
// module.exports = {
//   plugins: [require("tailwindcss"), require("autoprefixer")],
// };
