import {IRecipe} from '../interfaces';

export class NewRecipe implements IRecipe {
  constructor(
    public id: number,
    public title: string,
    public name: string,
    public ingrid: string,
    public description: string,
    public img?: string
  ) {}
}
