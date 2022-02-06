export class Quotes {
    // id!:number;
    // name!:string;
    // lists!:string;
    // author!:string;
    numberOfLikes!: number;
    numberOfDislikes!: number;
    constructor(public id: number, public name: string, public lists: string, public author: string, public submittedDate: Date) {
        this.numberOfLikes = 1;
        this.numberOfDislikes = 0;
    }
}




