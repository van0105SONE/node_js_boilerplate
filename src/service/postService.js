const { PrismaClient } = require("@prisma/client");


const prisma = new PrismaClient();

const createAuthor = async (data)=>{

    try{
        const author = await prisma.author.create({
            data:{
               name: data
            }
        })
        return author;
    }catch(err){
        throw new Error(err.message)
    }
}

const createPost = async (postData)=>{
    try{
        const post = prisma.post.create({
            data:{
                imageUrl: postData.imageUrl,
                title: postData.title,
                body: postData.body,
                Author:{
                    connect: {
                        id: postData.authorId
                    }
                }
            }
        })
    
        return post;
    }catch(err){
        throw new Error(err.message)
    }
}


const getPosts = async () =>{
    try{
       const posts = await prisma.post.findMany({
          include: {
             Author: true
          }
       })

       return posts;
    }catch(err){
       throw new Error(err.message)
    }
}


module.exports = {
    createPost,
    getPosts,
    createAuthor
}