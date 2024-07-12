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
  env: {
    BASE_URL:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3001"
        : "https://main--animated-liger-392e0d.netlify.app",
  },
};
