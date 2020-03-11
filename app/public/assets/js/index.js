// d3.csv("../../database/Copy of the_oscar_award.csv").then(function(data){
//   console.log(data);
// });
$(document).ready(function (){
  let category = $("#oscar_category :selected").text();
  let nomineeName = $("#nominee_name").val;
  let movie = $("#film_nominated").val();
  let filmYear = $("#film_production_year").text();
  let winner = $("#is_winner");
  let searchResults = $("#search_results");
  let searchForm = $("#search-movies");

  function categorySearch(){
    let selectedCategory = $("#oscar_category :selected").text();
    $.get(`/api/movies/category/${selectedCategory}`, function(data){
      console.log(data);
      console.log("You searched for a Catagory");

    });

  }

  //Search function for the name of the movie
  function movieSearch(){
    let enteredMovie = $("#film_nominated").val().trim();
    $.get(`/api/movies/${enteredMovie}`,function(data){
      console.log(data);
      console.log("You searched for a Film");
    });


  }
  function nameSearch(nomineeName){
    let enteredName = $("#nominee_name").val().trim();
    $.get(`/api/movies/name/${enteredName}`,function(data){
      console.log(data);
      console.log("You searched for a Name");
    });
  }
  function yearSearch(){

    let enteredYear = $("#film_production_year").val().trim();
    $.get(`/api/movies/year/${enteredYear}`,function(data){
      console.log(data);
      console.log("You searched for a Year");
    });


  }
  // function displaySearch(){

  // }
  function searchOscars(event){
    event.preventDefault();


    nameSearch();


    yearSearch();

    movieSearch();

    categorySearch();

  }


  searchForm.on("submit",searchOscars);
});