import axios from 'axios';

const URL = "https://jsonplaceholder.typicode.com/posts";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get(URL, {
      params: {
        _limit: limit,
        _page: page,
      }
    });
    return await response;
  }
}