export class Option {
    id: number;
    name: string;
    isAnswer: boolean;
    selected: boolean;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.name = data.content;
        this.isAnswer = data.correct;
    }
}
