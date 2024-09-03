export interface ISong {
    _id: string;
    title: string;
    artist: string;
    album: string;
    genre: string
}

export interface IAlbum {
    album: string;
    artist: string;
    noOfSongs: number;
}

export interface IArtist {
    artist: string;
    noOfAlbums: number;
    noOfSongs: number;
}

export interface IGenre {
    genre: string;
    noOfSongs: number;
}