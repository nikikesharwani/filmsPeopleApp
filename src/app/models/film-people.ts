export class FilmPeople {
    id: String;
    name: String;
    __v: Number;
    updated_at: Date;
    actor: Picture;
    composer: Picture;
    cinematographer: Picture;
    director: Picture;
    producer: Picture;
    screenwriter: Picture;
}

export interface Picture {
    picture: String;
    gross: Number;
    average: Number;
    movies: Number;
    total_gross: Number;
    rank: Number;
}
