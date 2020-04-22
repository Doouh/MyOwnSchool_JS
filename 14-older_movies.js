// Function that shows the titles of movies released before year 200020002000, using functional programming.
function olderMovies(movieList){
	return movieList.filter(movie => movie.year < 2000)
		.map(movie => movie.title);
}
