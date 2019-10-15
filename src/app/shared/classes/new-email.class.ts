import {IMail} from '../interfaces';

export class NewEmail implements IMail {
  constructor(
    public id: number,
    public uName: string,
    public uEmail: string,
    public uPhoneNumber: string,
    public serviceName: string,
    public wishDate: any,
    public wishTime: any,
    public time: any
  ) {}
}
