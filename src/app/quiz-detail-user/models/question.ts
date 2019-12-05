import {Option} from './option';

export class Question {
  id: number;
  name: string;
  options: Option[];
  answered: boolean;

  constructor(data: any) {
    data = data || {};
    this.id = data.id;
    this.name = data.content;
    this.options = [];
    data.answers.forEach(o => {
      this.options.push(new Option(o));
    });
  }
}
