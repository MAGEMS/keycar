import { Entity, Fields } from "remult";

/*@Entity("tasks", {
    allowApiCrud: true
})*/
export interface PickupLocation {
    Id: number
    Name: string
    Description: string
    ExtraInfo: boolean
    ExtraInfoText: string
    SelfService: boolean
    Times: any[]
  }
  