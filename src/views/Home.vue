<template>
  <div class="home">
    <h1>New Movie</h1>
    <p>Title:</p>
    <input type="string" v-model="newMovieParams.title" />
    <p>Plot:</p>
    <input type="text" v-model="newMovieParams.plot" />
    <p>Year:</p>
    <input type="text" v-model="newMovieParams.year" />
    <p>Director:</p>
    <input type="string" v-model="newMovieParams.irector" />
    <p></p>
    <button v-on:click="createMovie()">Create Movie</button>

    <h1>All Movies</h1>

    <div v-for="movie in movies" :key="movie.id">
      <h2>{{ movie.title }}</h2>
      <button v-on:click="showMovie(movie)">Movie Details</button>
      <div>-----------------------------------------------</div>
      <dialog id="movie-details">
        <form method="dialog">
          <h4>
            Title:
            <input type="text" v-model="currentMovie.title" />
          </h4>
          <p>
            Plot:
            <input type="text" v-model="currentMovie.plot" />
          </p>
          <p>
            Year:
            <input type="text" v-model="currentMovie.year" />
          </p>
          <button v-on:click="updateMovie(currentMovie)">Update Movie</button>
          <button v-on:click="destroyMovie(currentMovie)">Delete Movie</button>
          <button>close</button>
        </form>
      </dialog>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movies: [],
      newMovieParams: {},
      currentMovie: {},
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("http://localhost:3000/movies").then((response) => {
        this.movies = response.data;
        console.log("All Movies", this.movies);
      });
    },
    createMovie: function () {
      axios.post("http://localhost:3000/movies", this.newMovieParams).then((response) => {
        console.log(response.data);
        this.movies.push(response.data);
      });
      this.newMovieParams.title = "";
      this.newMovieParams.plot = "";
      this.newMovieParams.year = "";
    },
    showMovie: function (movie) {
      this.currentMovie = movie;
      console.log(movie);
      document.querySelector("#movie-details").showModal();
    },
    updateMovie: function (movie) {
      axios.patch("http://localhost:3000/movies/" + movie.id, movie).then((response) => {
        console.log("Movie Created", response.data);
      });
    },
    destroyMovie: function (movie) {
      axios.delete("http://localhost:3000/movies/" + movie.id).then((response) => {
        console.log("Movie Deleted", response.data);
        var index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
      });
    },
  },
};
</script>
