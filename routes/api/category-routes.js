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
    include: [Product] 
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req, body)
  .then((Category) => {
    res.json(Category);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.body.id
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
