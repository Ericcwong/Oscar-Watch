$(document).ready(function() {
  const movies = $.get("/api/movies");
  console.log(movies);
  let res = [];
  // let category = $("#oscar_category :selected").text();
  // let nomineeName = $("#nominee_name").val;
  // let movie = $("#film_nominated").val();
  // let filmYear = $("#film_production_year").text();
  // let winner = $("#is_winner");
  // let searchResults = $("#search_results");
  // let searchForm = $("#search-movies");

  function categorySearch() {
    let selectedCategory = $("#oscar_category :selected").text();
    $.get(`/api/movies/category/${selectedCategory}`);
    console.log(selectedCategory);
    // console.log({data});
    // console.log("You searched for a Catagory");

    // });
  }

  //Search function for the name of the movie
  function movieSearch() {
    //Takes in user input from DOM
    let enteredMovie = $("#film_nominated").val();
    //This is suppose to display the movie poster but is not aligning how it is supposed to be
    // let image = $.ajax({
    //   url: `http://www.omdbapi.com/?t=${enteredMovie}&apikey=bdaebc3a`,
    //   method: "GET"
    // }).then(function(res){
    //   console.log(res.Poster);
    // });
    // Sets obj to pull in infomation from the database based on what the user entered from the DOM
    let obj = $.get(`/api/movies/${enteredMovie}`, function(data) {
      console.log(enteredMovie);
      console.log(data);
      for (i = 0; i < data.length; i++) {
        //Create the cards
        let card = `<div class="card-header bg-primary">
          <h2 class="text-white">${data[i].movieName}</h2>
          <img src = "" alt = "Movie Poster">
          <h3 class="text-white">${data[i].filmYear}</h3></div>
          <h3 class="text-white">${data[i].awardYear}</h3></div>
          <div class="card-body">
            <p class="card-text"><strong>Catagories: </strong>${data[i].catagories}</p>
            <p class="card-text"><strong>Name: </strong>${data[i].name}</p>
          </div>
        </div>`;
        //appends the cards to the row search_results
        $("#search_results").append(card);
      }
    });

    // $("#search_results").append(test);
  }
  // function nameSearch(){
  //   let enteredName = $("#nominee_name").val().trim();
  //   $.get(`/api/movies/name/${enteredName}`,function(data){
  //     console.log(data);
  //     console.log("You searched for a Name");
  //   });
  // }
  // function yearSearch(){

  //   let enteredYear = $("#film_production_year").val().trim();
  //   $.get(`/api/movies/year/${enteredYear}`,function(data){
  //     console.log(data);
  //     console.log("You searched for a Year");
  //   });

  // }
  // function displaySearch(){

  // }
  // function searchOscars(event){
  //   event.preventDefault();

  //   nameSearch();

  //   yearSearch();

  //   movieSearch();

  //   categorySearch();

  // }

  $("#submitButton").on("click", function(event) {
    event.preventDefault();
    movieSearch();
    // categorySearch();
  });
});
