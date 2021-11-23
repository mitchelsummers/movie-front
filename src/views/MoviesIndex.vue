<template>
  <div class="movies-index">
    <h1>All Movies</h1>
    <div v-for="movie in movies" :key="movie.id">
      <h2>{{ movie.title }}</h2>
      <router-link v-bind:to="`/movies/${movie.id}`">Info</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movies: [],
    };
  },
  created: function () {
    axios.get("/movies/").then((response) => {
      this.movies = response.data;
      console.log(response.data);
    });
  },
};
</script>
