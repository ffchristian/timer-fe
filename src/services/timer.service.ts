
interface ITimerRequest {
  archiveUrl: string;
  archived: boolean;
  forks: number;
}
export default class TimerService {
  private apiUrl = "https://api.github.com/users/hacktivist123/repos";

  async getTimerData(): Promise<[ITimerRequest]> {
    const data = await fetch(this.apiUrl);
    const timerRequest = (await data.json()).map( (obj: any) => {
      return {
        archiveUrl: obj.archive_url,
        archived: obj.archived,
        forks: obj.forks,
      };
    });
    return timerRequest;
  }
  async saveTimerData() {
    const data = await fetch(this.apiUrl);
    return await data.json();
  }
}