const Books = require("../models/books")
const Videos = require("../models/videos")

const home = async(req,res) => {
    Books.find()
    .then(data => {
      Videos.find()
      .then(data1 => {
        res.render('home',{title:'Dashboard', Books:data, Videos:data1 })
      })  
    })
    .catch(err => {
        console.log(err);
    })
}
const addbooks = (req,res) => {
    Videos.find()
    .then(data1 => {
    res.render('books/addbooks', {title: "Add Books", Videos:data1})
    })
}
const addvideos = (req,res) => {
    Books.find()
    .then(data => {
    res.render('videos/addvideo', {title: "Add Videos", Books:data,})
    })
}
const savebooks = async(req,res) => {
    const data = new Books({
        book_title:req.body.book_title,
        author_name:req.body.author_name,
        book_image_id:req.body.book_image_id,
        book_category:req.body.book_category,
        book_url:req.body.book_url
    })
    await Books.insertMany([data])
    res.redirect('/')
}

const deletebook = async (req,res) => {
    const id = req.params.id;
    Books.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).console.log("cannot delete")
        }else{
            res.redirect("/")
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

const book_mobile_app = async(req,res) => {
    Books.find({book_category:"mobile app"})
    .then(data => {
        if(!data){
            console.log(err)
        }else{
            res.send(data)
        }
    })
}
const book_graphic_design = async(req,res) => {
    Books.find({book_category:"graphic design"})
    .then(data => {
        if(!data){
            console.log(err)
        }else{
            res.send(data)
        }
    })
}
const book_web_design = async(req,res) => {
    Books.find({book_category:"web design"})
    .then(data => {
        if(!data){
            console.log(err)
        }else{
            res.send(data)
        }
    })
}
const book_general_programming = async(req,res) => {
    Books.find({book_category:"general programming"})
    .then(data => {
        if(!data){
            console.log(err)
        }else{
            res.send(data)
        }
    })
}
// end of books apis

// start of videos apis
const savevideos = async(req,res) => {
    const data = new Videos({
        video_title:req.body.video_title,
        video_category:req.body.video_category,
        video_url:req.body.video_url
    })
    await Videos.insertMany([data])
    res.redirect('/')
}
const deletevideo = async (req,res) => {
    const id = req.params.id;
    Videos.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).console.log("cannot delete")
        }else{
            res.redirect("/")
        }
    })
    .catch(err=>{
        console.log(err)
    })
}
const video_mobile_app = async(req,res) => {
    Videos.find({video_category:"mobile app"})
    .then(data => {
        if(!data){
            console.log(err)
        }else{
            res.send(data)
        }
    })
}
const video_graphic_design = async(req,res) => {
    Videos.find({video_category:"graphic design"})
    .then(data => {
        if(!data){
            console.log(err)
        }else{
            res.send(data)
        }
    })
}
const video_web_design = async(req,res) => {
    Videos.find({video_category:"web design"})
    .then(data => {
        if(!data){
            console.log(err)
        }else{
            res.send(data)
        }
    })
}
const video_general_programming = async(req,res) => {
    Videos.find({video_category:"web design"})
    .then(data => {
        if(!data){
            console.log(err)
        }else{
            res.send(data)
        }
    })
}

// end of videos apis

module.exports ={
    home,
    addbooks,
    addvideos,
    savebooks,
    deletebook,
    book_mobile_app,
    book_general_programming,
    book_graphic_design,
    book_web_design,
    savevideos,
    deletevideo,
    video_mobile_app,
    video_general_programming,
    video_graphic_design,
    video_web_design,
};