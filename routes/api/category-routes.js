const router = require('express').Router();
const { createSchema } = require('../../config/connection');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({

    include: [Product]
  }).then(Category =>{
    res.json(Category)
  });
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [{
    model: Product,
    attributes: ['product_name', 'price', 'stock'] 
    }
    ]
  }).then(Category => {
    res.json(Category);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_id: req.body.category_id,
    category_name: req.body.category_name
  })
  .then((Category) => {
    res.json(Category);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {  
    where: {
      id: req.params.id
    }
  }).then(Category => {
    res.json(Category);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(Category => {
    res.json(Category);
  });
});

module.exports = router;
