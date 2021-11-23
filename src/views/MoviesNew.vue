<template>
  <div class="movies-index">
    <form v-on:submit.prevent="createMovie()">
      <h1>Create Movie</h1>
      <div>
        <label>Title:</label>
        <input type="text" v-model="newMovieParams.title" />
      </div>
      <div>
        <label>Year:</label>
        <input type="text" v-model="newMovieParams.year" />
      </div>
      <div>
        <label>Plot:</label>
        <input type="text" v-model="newMovieParams.plot" />
      </div>
      <div>
        <label>Director:</label>
        <input type="text" v-model="newMovieParams.director" />
      </div>
      <div>
        <label>In English?:</label>
        <input type="text" v-model="newMovieParams.english" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newMovieParams: {},
    };
  },
  methods: {
    createMovie: function () {
      axios
        .post("/movies/", this.newMovieParams)
        .then(() => {
          this.$router.push("/movies/");
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>
