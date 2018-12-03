// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-index-js": preferDefault(require("/Users/bagsewon/Documents/git/gitpage/bttb66.github.io/src/templates/blogPost/index.js")),
  "component---src-templates-tag-list-index-js": preferDefault(require("/Users/bagsewon/Documents/git/gitpage/bttb66.github.io/src/templates/tagList/index.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/bagsewon/Documents/git/gitpage/bttb66.github.io/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/bagsewon/Documents/git/gitpage/bttb66.github.io/src/pages/index.js")),
  "component---src-pages-search-js": preferDefault(require("/Users/bagsewon/Documents/git/gitpage/bttb66.github.io/src/pages/search.js"))
}

