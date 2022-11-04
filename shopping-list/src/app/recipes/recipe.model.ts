// The recipe model defines how a recipe should look like >> Think for tasks

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;


  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
