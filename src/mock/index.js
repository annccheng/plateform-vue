import Mock from "mockjs";
import token from './data/login.json'
import posts from './data/posts.json'

Mock.mock('/mock/login', {
  code: 200,
  data:token
})

Mock.mock('/mock/posts', {
  code: 200,
  data: posts
})