import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { APIKey } from '../../config/key';
import { Container, Movie, MovieList } from './styles';


function Home() {

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  const [movies, setMovies] = useState([]) // O nosso dado inicial é um array vazio, useState é um HOOK, e vai retornar a lista de arrays
  // Variavel MOVIES - armazena os dados, e SETMOVIES - atualiza esses dados, fazendo assim a desetruturação. 


// aqui estamos consumindo a API. 
  useEffect(() => {
//Consumir API 

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`) //retorna algo, os dados, mas o js entende como texto, então não é oq queremos.
    .then(response => response.json()) // aqui realizamos a conversão.
    .then(data => { // aqui estamos pegando os dados reais do fetch
      setMovies(data.results) // aqui ele esta pegando dentro de results, e tbm armazendando dentro da variavel setMovies.
    })
  }, [])



  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
      {movies.map(movie => {
        return (
          <Movie key={movie.id}>
                        {/* Aqui para criar a rota, instalar antes o - "npm install react-router-dom", após isso, mexer no index.js, pois a estrutura irá mudar.  */} 

                        
            <Link to={`/details/${movie.id}`}> {/* Aqui é a rota ao clicar no link */}  
              <img src={`${imagePath}${movie.poster_path}`} alt={movie.title}/>
            </Link>
            <span>{movie.title}</span>
          </Movie>
        )
      })}
      </MovieList>
    </Container>
  );
}

export default Home;