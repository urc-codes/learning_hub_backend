const express = require ('express');
const controller = require('../controller/controller')
const router = express.Router();

router.get("/",controller.home)
router.get("/addbooks", controller.addbooks)
router.post("/savebooks",controller.savebooks)
router.get("/deletebook/:id", controller.deletebook)
router.get("/books/mobile_app", controller.book_mobile_app)
router.get("/books/web_design", controller.book_web_design)
router.get("/books/graphic_design", controller.book_graphic_design)
router.get("/books/general_programming", controller.book_general_programming)


router.get("/addvideos", controller.addvideos)
router.post("/savevideos", controller.savevideos)
router.get("/deletevideo/:id", controller.deletevideo)
router.get("/videos/mobile_app", controller.video_mobile_app)
router.get("/videos/web_design", controller.video_web_design)
router.get("/videos/graphic_design", controller.video_graphic_design)
router.get("/videos/general_programming", controller.video_general_programming)
module.exports = router;