export class CreateRequestModel {
    constructor(
        public title : string,
        public imageUrl : string,
        public year : number,
        public genre : string
    ) { }
}