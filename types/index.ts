import { StaticImageData } from "next/image";

export interface IEvent {
  key: string | number;
  image: StaticImageData;
  startDate: string;
  endDate: string;
  text: string;
  subText: string;
}
