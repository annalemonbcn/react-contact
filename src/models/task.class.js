import { LEVELS } from "./levels.enum";

export class Task {
  name = '';
  description = '';
  isComplete = false;
  level = LEVELS.NORMAL;

  constructor(name, description, isComplete, level){
    this.name = name;
    this.description = description;
    this.isComplete = isComplete;
    this.level = level;
  }
  
}