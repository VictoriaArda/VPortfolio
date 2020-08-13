require("dotenv").config() 
const db = require("../models");
const axios = require("axios")

var data = JSON.stringify({
  query: `query { 
    viewer { 
      repositories(first:20){
        nodes{
          id
          name
          url
          description
        } 
      }
    }
  }`,
  variables: {}
});

const query = `query { 
  viewer { 
    repositories(first:10){
      nodes{
        id
        name
        url
        description
      } 
    }
  }
}`

// Defining methods for the ReposController
module.exports = {
  findAll:  (req, res) => {
   axios({
      method: 'post',
      url: 'https://api.github.com/graphql',
      headers: { 
        'Authorization': `Bearer ${process.env.GH_API_KEY}`, 
        'Content-Type': 'application/json'
      },
      data : data
    }).then(results => {
      res.json({data: results.data.data.viewer.repositories.nodes})
    })
   
  },
  findById: function(req, res) {
    db.Repo
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Repo
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Repo
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Repo
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};