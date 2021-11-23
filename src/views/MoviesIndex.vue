<template>
  <div class="movies-index">
    <h1>All Movies</h1>
    Search by title:
    <input type="text" v-model="titleFilter" list="titles" />
    <datalist id="titles">
      <option v-for="movie in movies" :key="movie.id">{{ movie.title }}</option>
    </datalist>
    <div>
      <button>Sort Alphabetically</button>
    </div>
    <div v-for="movie in orderBy(filterBy(movies, titleFilter, 'title'), 'title')" :key="movie.id">
      <h2>{{ movie.title }}</h2>
      <router-link v-bind:to="`/movies/${movie.id}`">Info</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      movies: [],
      titleFilter: "",
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
