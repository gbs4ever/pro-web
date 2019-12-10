exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // Make the front page match everything client side.
  // Normally your paths should be a bit more judicious.
  if (page.path === `/`) {
    page.matchPath = `/*`
    createPage(page)
  }
}
