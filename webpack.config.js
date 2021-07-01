module.exports = {
  entry: {
    messages: "./src/messages",
    "hello-world": "./src/hello-world",
  },
  output: {
    library: {
      type: "global",
    },
    filename: "[name].js",
  },
};
