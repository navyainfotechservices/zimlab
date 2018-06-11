/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // '/': {
  //   assets: 'index'
  // },

  // '/*' : {
  //   admin: 'index',
  //   skipAssets:true
  // }

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

  // 'post /test': 'UserController.test',

  //Product Page
  'post /saveProduct': 'ProductController.saveProduct',
  'post /getProductList': 'ProductController.getProductList',
  'post /getOneProduct': 'ProductController.getOneProduct',
  'post /updateProduct': 'ProductController.updateProduct',
  'post /deleteProduct': 'ProductController.deleteProduct',

  //Product category page
  'post /saveProductCategory': 'ProductCategoryController.saveProductCategory',
  'post /getProductCategory': 'ProductCategoryController.getProductCategory',
  'post /getOneProductCategory': 'ProductCategoryController.getOneProductCategory',
  'post /updateProductCategory': 'ProductCategoryController.updateProductCategory',
  'post /deleteProductCategory': 'ProductCategoryController.deleteProductCategory',

  //Banner Page
  'post /saveBanner': 'BannerController.saveBanner',
  'post /getBannerList': 'BannerController.getBannerList',
  'post /getOneBanner': 'BannerController.getOneBanner',
  'post /updateBanner': 'BannerController.updateBanner',
  'post /deleteBanner': 'BannerController.deleteBanner',

  //FinancialYear Page
  'post /saveFinancialYear': 'FinancialYearController.saveFinancialYear',
  'post /getFinancialYearList': 'FinancialYearController.getFinancialYearList',
  'post /getOneFinancialYear': 'FinancialYearController.getOneFinancialYear',
  'post /updateFinancialYear': 'FinancialYearController.updateFinancialYear',
  'post /deleteFinancialYear': 'FinancialYearController.deleteFinancialYear',
  'post /getCurrentFinancialYear': 'FinancialYearController.getCurrentFinancialYear',

  //Product Page
  'post /saveGraph': 'GraphController.saveGraph',
  'post /getGraphList': 'GraphController.getGraphList',
  'post /getOneGraph': 'GraphController.getOneGraph',
  'post /updateGraph': 'GraphController.updateGraph',
  'post /deleteGraph': 'GraphController.deleteGraph',


  //Pages
  'post /savePages': 'PagesController.savePages',
  'post /getPagesList': 'PagesController.getPagesList',
  'post /getOnePages': 'PagesController.getOnePages',
  'post /updatePages': 'PagesController.updatePages',
  'post /deletePages': 'PagesController.deletePages',


  //Blog
  'post /saveBlog': 'BlogController.saveBlog',
  'post /getBlogList': 'BlogController.getBlogList',
  'post /getOneBlog': 'BlogController.getOneBlog',
  'post /updateBlog': 'BlogController.updateBlog',
  'post /deleteBlog': 'BlogController.deleteBlog',


};
