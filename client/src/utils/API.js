import axios from "axios";

export default {
  // Create a User...
  createUser: function(userData) {
    //   const userData2 = {
    //     email: 'test2@test2.com',
    //     password: 'test123',
    //     display_name: "User 1",
    //     user_Type: "1"
    //   };

    //   return axios.post("auth/signup", userData2);
    return axios.post("auth/signup", userData);
  },
  // Login
  getLogin: function(loginData) {
    // console.log("Api-GetLogin from Util Folder");
    return axios.post("auth/login", loginData);
    // return axios.get("auth/test");
  },
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/posts");
  },

  // Gets all posts
  getPosts: function() {
    return axios.get("/api/posts");
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a post to the database
  savePost: function(postData) {
    return axios.post("/api/posts", postData);
  }
};
