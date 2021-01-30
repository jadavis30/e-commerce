const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [Product]
  }).then(Tag =>{
    res.json(Tag)
  });
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [Product] 
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req, body)
  .then((Tag) => {
    res.json(Tag);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.body.id
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
