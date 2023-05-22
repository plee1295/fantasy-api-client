import axios from 'axios';

export default class Http {
  baseUrl: string;

  constructor (baseUrl: string) {
    this.baseUrl = baseUrl;

    axios.defaults.baseURL = baseUrl;
  }

  async get (path: string): Promise<object> {
    let response = {}

    try {
      response = await axios.get(path);
    } catch (error) {
      response = { error };
    }

    return response;
  }
}