const uuid = require("uuid");

const postDB = [{
    "id": '84cd6011-8e86-4d6d-b25b-1d6b4182ecr7',
    "title": 'dia de playa',
    "content": '',
    "header_img" : '',
    "user_id" : '74cd6011-7e76-4d6d-b25b-1d6e4182ec2f',
    "published" : true

},
{
    "id": '84cd6011-8e86-4d6d-b25b-123456789bfg',
    "title": 'visitando Paris',
    "content": '',
    "header_img" : '',
    "published" : true

},
{
    "id": '84cd6011-8e86-4d6d-b25b-987654321pot',
    "title": 'mi primer skeleton solo',
    "content": '',
    "header_img" : '',
    "published" : true

}]


const getAllPost = () => {
    return postDB
}

const getPostByUserId = (id, user_id) => {
  const data = postDB.filter((item) => item.id === id && item.user_id === user_id)
    return data.length ? data[0] : false 
}

const getPostByUser = (user_id) => {
    const data = postDB.filter((item) => item.user_id === user_id)
    return data.length ? data[0] : false 
}

const getPostById = (id) => {
    const data = postDB.filter((item) => item.id === id)
    return data.length ? data[0] : false
}

const createPost = (data, userId) => {

    const newPost = {
        id: uuid.v4(),
        title: data.title,
        content: data.content,
        header_img: data.header_img,
        user_id: userId,
        published: true
    }
    postDB.push(newPost)
    return newPost
}

const editPost = (id, data) => {
    const index = postDB.findIndex((post) => post.id === id)
    if (index !== -1){
        postDB[index] = {
            id: id,
            title: data.title,
            content: data.content,
            header_img: data.header_img,
            user_id: postDB[index].user_id,
            published: true
        }
       return postDB[index]
    }else {
        return false
    }
}


const deletePost = (id) => {
    const index = postDB.findIndex((post) => post.id === id)
    if (index !== -1){
        postDB.splice(index, 1)
    } else {
        return false
    }

}


module.exports = {
    getAllPost,
    getPostById,
    createPost,
    editPost,
    deletePost,
    getPostByUser,
    getPostByUserId
}