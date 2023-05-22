export default interface IClient {
  leagueId: number;
  options: object;

  getLeague(id: number): object;
  getLeagueMembers(id: number): object[];
}