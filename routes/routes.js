const express = require ('express');
const controller = require('../controller/controller')
const router = express.Router();

router.get("/",controller.home)
router.get("/addbooks", controller.addbooks)
router.post("/savebooks",controller.savebooks)
router.get("/deletebook/:id", controller.deletebook)

router.get("/addvideos", controller.addvideos)

module.exports = router;