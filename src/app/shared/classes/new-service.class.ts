import {IService} from '../interfaces';

export class NewService implements IService {
  constructor(
    public id: number,
    public title: string,
    public name: string,
    public price: number,
    public description: string,
    public img?: string
  ) {}
}
