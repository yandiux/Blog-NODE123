const postController = require("./posts.controller")

const getAll = (req, res) => {
const data = postController.getAllPost();
res.status(200).json({items: data.length, posts: data});
}

const getByUserId = (req, res) => {
  const user_id = req.user.id
  const id = req.params.id
  const data = postController.getPostByUserId(id, user_id);
  if (data){
    res.status(200).json(data)
  } else {
    res.status(400).json({message: `post with id ${id} not found`})
  }
 
}

const getByUser = (req, res) => {
  const id = req.user.id;
  const data = postControllers.getPostByUser(id);

  if(data) {
      res.status(200).json({items: data.length, posts: data})
  } else {
      res.status(404).json({message: 'the user dont have post'})
  }
}



const getById = (req, res) => {
    const id = req.params.id;
    const data = postController.getPostById(id);
    if (data){
        res.status(200).json(data)
    } else{
        res.status(404).json({ message: `the post with id ${id} don't exist` });
    }

}

const register = (req, res) => {
    const data = req.body;
    const userId = req.user.id

    if (!data){
        res.status(400).json({messase: 'Missing data'})
    } else if (
        !data.title ||
        !data.content ||
        !data.header_img 
    ) {
        return res.status(400).json({
            message: "All fields must be completed",
            fields: {
              title: "string",
              content: "string",
              header_img: "png/jpg"
              
    },
    });
    } else {
        const response = postController.createPost(data, userId);
        return res.status(201).json({message: `Post created succesfully with id: ${response.id}`,
          post: response,
        })
        
    }}

    const edit = (req, res) => {
        const id = req.params.id;
        const data = req.body;
        const userId = req.user.id
        if (!Object.keys(data).length) {
          return res.status(400).json({ message: "Missing Data" });
        } else if (
          !data.title ||
          !data.content ||
          !data.header_img, 
          !data.published
        ) {
          return res.status(400).json({
            message: "All fields must be completed",
            fields: {
              title: "string",
              content: "string",
              header_img: 'png/jpg',
              is_active: true
            },
          });
        } else {
          const response = postController.editPost(id, data, userId)
          return res.status(200).json({
            message: 'Post edited succesfully',
            post: response
          })
        }
      };

      const deleteP = (req, res) => {
        const id = req.params.id
        const UserId = user.id
        const post = postController.getPostById(id)
        if (post.user_id === UserId){
          postController.deletePost(id)
          res.status(204).json()
        } else{
          res.status(401).json()
        }
      }


      module.exports = {
        getAll,
        getById,
        register,
        edit,
        deleteP,
        getByUser,
        getByUserId
        
      }