import {IBlog} from '../interfaces';

export class NewBlog implements IBlog {
  constructor(
    public id: number,
    public title: string,
    public shortContent: string,
    public content: string,
    public img?: string
  ) {}
}
