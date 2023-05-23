import axios from 'axios';

export default class Http {
  baseUrl: string;

  constructor (baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get (path: string): Promise<object> {
    let response = {}

    try {
      const { data } = await axios.get(`${this.baseUrl}${path}`);
      response = data
    } catch (error: any) {
      response = {
        error: {
          status: error.response.status,
          statusText: error.response.statusText
        }
      };
    }

    return response;
  }
}