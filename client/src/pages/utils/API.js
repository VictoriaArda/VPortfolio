import axios from "axios";

export default {
  // Gets all Repos
  getRepo: function() {
    return axios.get("/api/repos");
  },
  // Gets the repo with the given id
  getRepo: function(id) {
    return axios.get("/api/repos/" + id);
  },
  // Deletes the repo with the given id
  deleteRepo: function(id) {
    return axios.delete("/api/repos/" + id);
  },
  // Saves a repo to the database
  saveRepo: function(repoData) {
    return axios.post("/api/repos", repoData);
  }
};