const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [ {model: Product, through: ProductTag}]
  }).then(Tag =>{
    res.json(Tag)
  });
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model: Product,
      attributes:['product_name', 'price', 'stock']
    }] 
  }).then(Tag => {
    res.json(Tag);
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_id: req.body.tag_id,
    tag_name: req.body.tag_name
  }).then((Tag) => {
    res.json(Tag);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update( 
    {
      tag_name: req.body.tag_name
    },
    {  
    where: {
      id: req.params.id
    }
  }).then(Tag => {
    res.json(Tag);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(Tag => {
    res.json(Tag);
  });
});

module.exports = router;
