const API_KEY = "d9489e15c4ce47242e55f1b2cff97396";
const base_url = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${base_url}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const searchMovie = async (search) => {
    const response = await fetch(`${base_url}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(search)}`);
    const result = await response.json();
    return result.results;
}
