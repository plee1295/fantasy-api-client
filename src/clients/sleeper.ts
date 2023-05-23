import Http from '../utils/http';
import { SLEEPER_API_URL } from '../utils/constants';
import IClient from "../types/client.interface";

const http = new Http(SLEEPER_API_URL);

export default class Sleeper implements IClient {
  readonly leagueId: string;
  options: object;

  constructor (leagueId: string, options: object = {}) {
    this.leagueId = leagueId;
    this.options = Object.assign({}, options);
  }

  async getLeague (id: string = this.leagueId): Promise<object> {
    return await http.get(`/league/${id}`)
  }

  getLeagueMembers (id: string = this.leagueId): object[] {
    return []
  }
}