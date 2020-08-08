import React from 'react';

import axios from 'axios';

export default class RepoList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    const axios = require("axios");

    axios({
        "method":"POST",
        "url":"https://githubdimashirokovv1.p.rapidapi.com/acceptRepositoryInvite",
        "headers":{
        "content-type":"application/x-www-form-urlencoded",
        "x-rapidapi-host":"GithubdimashirokovV1.p.rapidapi.com",
        "x-rapidapi-key":"ba63c46023msha58dab36d301a7ap1b6eb9jsnb426d691bfe7",
        "useQueryString":true
        },"data":{
        
        }
        })
        .then((response)=>{
          console.log(response)
          console.log(res.data)
        })
        .catch((error)=>{
          console.log(error)
        })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}

export default RepoList;