import { ColorsEnum } from "../enum/colors.enum";

export interface ICars{
  id : number,
  brand : string,
  model : string,
  color : ColorsEnum,
  price? : number
}
