
$(document).ready(function (){
  // let category = $("#oscar_category :selected").text();
  // let nomineeName = $("#nominee_name");
  // let nominatedFilm = $("#film_nominated");
  // let filmYear = $("#film_production_year");
  // let winner = $("#is_winner");
  // let searchResults = $("#search_results");
  let searchForm = $("#search-movies");

  function categorySearch(){
    let selectedCategory = $("#oscar_category :selected").text();
    console.log("Line 19");
    $.get(`/api/movies/category/${selectedCategory}`, function(data){
      console.log(data);

    });

  }
  // console.log("line 26");

  // function movieSearch(){

  // }
  // function nameSearch(){

  // }
  // function yearSearch(){

  // }
  // function displaySearch(){

  // }
  function searchOscars(event){
    event.preventDefault();
    categorySearch(category);


  }



  searchForm.on("submit",searchOscars);
});

