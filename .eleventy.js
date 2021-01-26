module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    host: 'biocompact.local',
    port: '9090'
  })

  eleventyConfig.addPassthroughCopy({'src/assets': '/assets'})
  eleventyConfig.addPassthroughCopy({'src/wp-content': '/wp-content'})

  return {
    templateFormats: ['html', 'txt'],
    dir: {
      input: 'src/views',
      output: 'dist',
      includes: '../includes',
      layouts: '../layouts'
    }
  }
}
