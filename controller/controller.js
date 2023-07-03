const Books = require("../models/books")
const Videos = require("../models/videos")

const home = async(req,res) => {
    Books.find()
    .then(data => {
      Videos.find()
      .then(data1 => {
        res.render('Home',{title:'Dashboard', Books:data, Videos:data1 })
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


module.exports ={
    home,
    addbooks,
    addvideos,
    savebooks,
    deletebook,
};