export class CreateFilmModel {
    constructor(
        public title : string,
        public imageUrl : string,
        public filmUrl : string,
        public year : number,
        public genre : string,
        public description : string
    ) { }
}