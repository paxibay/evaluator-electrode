module.exports = {
  cache: {
    cacheId: "evaluator-electrode",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "evaluator-electrode",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
