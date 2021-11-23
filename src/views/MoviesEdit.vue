<template>
  <div class="movies-index">
    <h1>Edit Movie</h1>
    <form v-on:submit.prevent="updateMovie()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="currentMovieParams.title" />
      </div>
      <div>
        <label>Year:</label>
        <input type="text" v-model="currentMovieParams.year" />
      </div>
      <div>
        <label>Plot:</label>
        <input type="text" v-model="currentMovieParams.plot" />
      </div>
      <div>
        <label>English:</label>
        <input type="text" v-model="currentMovieParams.english" />
      </div>
      <input type="submit" value="Submit" />
      |
      <button v-on:click="destroyMovie()">Delete</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentMovieParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/movies/${this.$route.params.id}`).then((response) => {
      console.log("Movie Info: ", response.data);
      this.currentMovieParams = response.data;
    });
  },
  methods: {
    updateMovie: function () {
      console.log("Updating Movie");
      axios
        .patch(`/movies/${this.$route.params.id}`, this.currentMovieParams)
        .then((response) => {
          this.currentMoviearams = response.data;
          this.$router.push(`/movies/${this.$route.params.id}`);
        })
        .catch((error) => console.log(error.response));
    },
    destroyMovie: function () {
      axios.delete("http://localhost:3000/movies/" + this.$route.params.id).then((response) => {
        console.log("Successfully Deleted!", response.data);
        this.$router.push("/movies");
      });
    },
  },
};
</script>
