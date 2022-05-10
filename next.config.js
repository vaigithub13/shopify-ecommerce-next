const { withFrameworkConfig } = require("./framework/common/config.js");

module.exports = withFrameworkConfig({
  framework: {
    name: process.env.NEXT_PUBLIC_FRAMEWORK,
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
});
