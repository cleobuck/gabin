const path = require("path");

module.exports = {
  webpack(config) {
    // Define path alias for styles directory
    config.resolve.alias["@styles"] = path.join(__dirname, "src/assets/styles");
    config.resolve.alias["@fonts"] = path.join(__dirname, "src/assets/fonts");

    // Add webpack rule for SVG files
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
