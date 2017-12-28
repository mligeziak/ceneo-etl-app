// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  extractUrl: 'http://localhost:3000/api/review/extract',
  transformUrl: 'http://localhost:3000/api/review/transform',
  loadUrl: 'http://localhost:3000/api/review/load',
  searchUrl: 'http://localhost:3000/api/product/search',
  getProductUrl: 'http://localhost:3000/api/product',
  getReviewsUrl: 'http://localhost:3000/api/review',
  dropDatabaseUrl: 'http://localhost:3000/api/review/drop-database'
};
