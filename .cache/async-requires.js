// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-index-js": () => import("/Users/bagsewon/Documents/git/gitpage/bttb66.github.io/src/templates/blogPost/index.js" /* webpackChunkName: "component---src-templates-blog-post-index-js" */),
  "component---src-templates-tag-list-index-js": () => import("/Users/bagsewon/Documents/git/gitpage/bttb66.github.io/src/templates/tagList/index.js" /* webpackChunkName: "component---src-templates-tag-list-index-js" */),
  "component---src-pages-404-js": () => import("/Users/bagsewon/Documents/git/gitpage/bttb66.github.io/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/bagsewon/Documents/git/gitpage/bttb66.github.io/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-search-js": () => import("/Users/bagsewon/Documents/git/gitpage/bttb66.github.io/src/pages/search.js" /* webpackChunkName: "component---src-pages-search-js" */)
}

exports.data = () => import("/Users/bagsewon/Documents/git/gitpage/bttb66.github.io/.cache/data.json")

