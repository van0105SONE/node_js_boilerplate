const postService = require('../service/postService')
const postValidate = require('../validator/postValidation')

const createAuthor = async (req, res)=>{
    const {name} = req.body
    try{
        console.log(name)
       let author = await postService.createAuthor(name)
       if(author == null){
          return res.status(500).json({title: "Failure", message: "Can't create author"})
       }
        res.status(201).json({title: 'Successful', message: "success create author"})
    }catch(err){
        res.status(500).json({title: 'Internal', message: err.message})
    }
}


const createPost = async (req, res) => {
    const {body} = req;
    try {

        let post = await postService.createPost({imageUrl: body.imageUrl, title: body.title,body: body.body,authorId: body.authorId });
        if (post == null) {
            return res.status(500).json({ title: "Fail", message: "Server can't create the post" })
        }

        res.status(201).json({ title: "successful", message: "Success create post" })
    } catch (err) {
        res.status(500).json({ title: "Internal-Error", message: err.message })
    }
}

const getPosts = async (req, res) => {
    try {
     let posts =  await postService.getPosts();
     res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({ title: "Internal-Error", message: err.message })
    }
}


module.exports = {
    createPost,
    getPosts,
    createAuthor
}