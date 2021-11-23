<template>
  <div class="movies-index">
    <h2>{{ movie.title }}</h2>
    <p>{{ movie.plot }}</p>
    <p>{{ movie.year }}</p>
    <router-link v-bind:to="`/movies/${movie.id}/edit`">Edit</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movie: {},
    };
  },
  created: function () {
    axios.get("/movies/" + this.$route.params.id).then((response) => {
      this.movie = response.data;
      console.log(response.data);
    });
  },
};
</script>
