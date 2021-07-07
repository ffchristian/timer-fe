export default class TimerService {
  private apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

  async getTimerData(): Promise<number> {
    try {
      const endpoint = "/timer/current";
      const data = await fetch(`${this.apiUrl}${endpoint}`);
      return  (await data.json()).curentTime;
    } catch (error) {
      return 0;
    }
  }

  async saveTimerData(time: number) {
    try {
      const endpoint = "/timer/";
      const data = await fetch(`${this.apiUrl}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ time })
      });
    return (await data.json()).curentTime;
    } catch (error) {
      return 0;
    }
  }
}