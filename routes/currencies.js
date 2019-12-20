const { Router } = require('express');
const Curr = require('../models/Curr');
const router = Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/currencies', async (req, res) => {
  //   const currencies = await Curr.find({});
  res.render('currencies', {
    title: 'Currencies'
    // currencies
  });
});

module.exports = router;
