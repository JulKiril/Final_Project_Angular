import {IForm} from '../interfaces';

export class NewForm implements IForm {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public phoneNumber: any,
    public message: string,
    public time: any

) {}
}
