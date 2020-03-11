// d3.csv("../../database/Copy of the_oscar_award.csv").then(function(data){
//   console.log(data);
// });
$(document).ready(function (){
  let category = $("#oscar_category :selected").text();
  let nomineeName = $("#nominee_name");
  let movie = $("#film_nominated").val();
  let filmYear = $("#film_production_year");
  let winner = $("#is_winner");
  let searchResults = $("#search_results");
  let searchForm = $("#search-movies");

  function categorySearch(){
    let selectedCategory = $("#oscar_category :selected").text();
    $.get(`/api/movies/category/${selectedCategory}`, function(data){
      console.log(data);

    });

  }


  function movieSearch(){
    let enteredMovie = $("#film_nominated").val().trim();
    $.get(`/api/movies/${enteredMovie}`,function(data){
      console.log(data);
    });

  }
  function nameSearch(){
    let enteredName = $("#nominee_name").val().trim();
    $.get(`/api/movies/${enteredName}`,function(data){
      console.log(data);
    });

  }
  function yearSearch(){
    let enteredYear = $("#film_production_year").val().trim();
    $.get(`/api/movies/${enteredYear}`,function(data){
      console.log(data);
    });


  }
  // function displaySearch(){

  // }
  function searchOscars(event){
    event.preventDefault();
    // categorySearch(category);
    yearSearch(movie);

  }



  searchForm.on("submit",searchOscars);
});

