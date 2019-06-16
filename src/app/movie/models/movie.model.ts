export interface Movie {
	id: number;
	name: string;
	genre: string;
	image: string;
	releaseYear: string;
}

export const movies: Movie[] = [
	{
		id: 1,
		name: 'John Wick 3',
		genre: 'Action',
		image: 'http://t3.gstatic.com/images?q=tbn:ANd9GcTaABFJr_eVRUhtaPnKfihePqqNsJjcGvZ62OgxCv6wjXn-XgGC',
		releaseYear: '2019'
	},
	{
		id: 2,
		name: 'Avengers: Endgame',
		genre: 'Action',
		image: 'http://t2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
		releaseYear: '2019'
	},
	{
		id: 3,
		name: 'Dark Phoenix',
		genre: 'Action',
		image: 'http://t2.gstatic.com/images?q=tbn:ANd9GcSx4JS_U1Xp6AKtrTXtE00H40SejV2VfJtLVd3Vy46BcPYa0PPy',
		releaseYear: '2019'
	},
	{
		id: 4,
		name: 'Spider-Man: Far From Home',
		genre: 'Action',
		image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcRPzzfxN6Ugvq902Ut7A-QkCDOqLzzbiYQ2bPk2pn5D9fBZBrT_',
		releaseYear: '2019'
	}
];
