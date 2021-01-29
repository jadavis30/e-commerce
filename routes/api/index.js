const router = require('express').Router();
const { Product, Category } = require('../../models');
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

Product.belongsto(Category);
Category.hasMany(Product);
Product.belongstoMany(Tag);
Tag.belongstoMany(Product);

module.exports = router;
