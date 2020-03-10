// d3.csv("../../database/Copy of the_oscar_award.csv").then(function(data){
//   console.log(data);
// });
$(document).ready(function (){
  const category = $("#oscar_category :selected").text();
  const nomineeName = $("#nominee_name");
  const nominatedFilm = $("#film_nominated");
  const filmYear = $("#film_production_year");
  const winner = $("#is_winner");
  const searchResults = $("#search_results");
  const searchForm = $("#search-movies");

  function categorySearch(category){
    console.log("Line 19");
    $.get(`/api/movies/category/${category}`, function(data){
      console.log(data);

    });

  }
  console.log("line 26");

  function movieSearch(){

  }
  function nameSearch(){

  }
  function yearSearch(){

  }
  function displaySearch(){

  }
  function searchOscars(event){
    event.preventDefault();
    categorySearch(category);


  }



  searchForm.on("submit",searchOscars);
});

