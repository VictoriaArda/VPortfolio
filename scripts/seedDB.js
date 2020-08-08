const mongoose = require("mongoose");
const db = require("../models");
import EmpDir from "../client/src/pages/components/img/EmployeeDir.PNG";
import Proj2 from "../client/src/pages/components/img/project2.PNG";
import Budget from "../client/src/pages/components/img/budget.PNG";
import Portfolio from "../client/src/pages/components/img/portfolio.PNG";


// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/RepoList"
);

const repoSeed = [
  {
    title: "Employee Directory",
    pic: {EmpDir},
    githublink:"https://github.com/VictoriaArda/EmployeeDirectory",
    desc:"An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.",
    liveDemo:"https://empdir2020.herokuapp.com/",
    date: new Date(Date.now())
  },
  {
    title: "Project 2",
    pic: {Proj2},
    githublink:"https://github.com/VictoriaArda/Project2",
    desc:"This application is aimed at people wanting to search for recipe, and build personal recipe. User’s can favorite recipes and can check their favorites later.",
    liveDemo:"https://project-2-vnv.herokuapp.com/",
    date: new Date(Date.now())
  },
  {
    title: "Budget Trackers",
    pic: {Budget},
    githublink:"https://github.com/VictoriaArda/ProgressiveBudget",
    desc:"As a frequent traveller I need to keep on top of my budget, even when in areas with a poor internet connection. Being able to update my budget offline and have it update correctly when I have an internet connection again.",
    liveDemo:"https://progressivebudget2020.herokuapp.com/",
    date: new Date(Date.now())
  },
  {
    title: "Another Portfolio",
    pic: {Portfolio},
    githublink:"https://github.com/VictoriaArda/ProjectProfessionalMaterials",
    desc:"Updated portfolio with skills built over the last three months of class. Features three homework assignments, as well as links to email, GitHub, LinkedIn.",
    liveDemo:"https://victoriaarda.github.io/ProjectProfessionalMaterials/",
    date: new Date(Date.now())
  },

];

db.Repo
  .remove({})
  .then(() => db.Repo.collection.insertMany(repoSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });