export class Reservation {

  constructor(
    public id: number,
    public adventureCampId: number,
    public activityType: string,
    public participantName: string,
    public participants: number,
    public weatherTemperature: number,
    public reservedAt:string
  ) {
  }


}
