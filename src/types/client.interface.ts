export default interface IClient {
  leagueId: string;
  options: object;

  getLeague(id: string): object;
  getLeagueMembers(id: string): object[];
}