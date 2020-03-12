$(document).ready(function() {
  let category = $("#oscar_category :selected").text();
  let nomineeName = $("#nominee_name").val();
  let movie = $("#film_nominated").val();
  let filmYear = $("#film_production_year").text();
  let winner = $("#is_winner").is(":checked");
  // let searchResults = $("#search_results");
  // let searchForm = $("#search-movies");

  console.log(category + nomineeName + movie + filmYear + winner);

  // function categorySearch() {
  //   let selectedCategory = $("#oscar_category :selected").text();
  //   $.get(`/api/movies/category/${selectedCategory}`);
  //   console.log(selectedCategory);
  // console.log({data});
  // console.log("You searched for a Catagory");

  // });
  //}

  //Search function for the name of the movie
  function movieSearch() {
    //Takes in user input from DOM
    let category = $("#oscar_category :selected").text();
    let nomineeName = $("#nominee_name")
      .val()
      .trim();
    let movie = $("#film_nominated")
      .val()
      .trim();
    let filmYear = $("#film_production_year")
      .val()
      .trim();
    let winner = $("#is_winner").is(":checked");
    let query ="";

    if (category !== "" && category !== "Select Category") {
      if (query !== ""){
        query = query + "&";
      }
      query = query + "catagories=" + category;
    }
    if (nomineeName !== "") {
      if (query !== ""){
        query = query + "&";
      }
      query = query + "name=" + nomineeName;
    }
    if (movie !== "") {
      if (query !== ""){
        query = query + "&";
      }
      query = query + "movieName=" + movie;
    }
    if (filmYear !== "") {
      if (query !== ""){
        query = query + "&";
      }
      query = query + "filmYear=" + filmYear;
    }
    if (winner !== false) {
      if (query !== ""){
        query = query + "&";
      }
      query = query + "Winner=" + winner;
    }

    console.log(query);
    $.get(`/api/movies/search?${query}`, function(films) {
      $("#search_results").empty();
      // console.log(enteredMovie);
      console.log(films);
      //This is suppose to display the movie poster but is not aligning how it is supposed to be
      for (m = 0; m < films.length; m++) {
        let enteredMovie = films[m].movieName;
        let filmYear = films[m].filmYear;
        let catagories = films[m].catagories;
        let name = films[m].name;
        console.log(enteredMovie);
        let image;
        $.ajax({
          url: `http://www.omdbapi.com/?t=${enteredMovie}&apikey=bdaebc3a`,
          method: "GET"
        }).then(function(res) {
          console.log(res.Poster);
          image = res.Poster;
          //Create the cards
          // let card = `
          //   <div class="card amber darken-4">
          //   <div class="card-image">
          //   <img src = "${image}" alt = "${enteredMovie} Movie Poster">
          //   </div>
          //   <div class="card-title">
          //   <h2><span class="text-darken-2">${enteredMovie}</span></h2>
          //   </div>
          //   <div class="card-content">
          //   <p>FilmYear: ${filmYear}</p>
          //   </div>
          //     <p class="card-text"><strong>Categories: </strong>${catagories}</p>
          //     <p class="card-text"><strong>Name: </strong>${name}</p>
          // </div>
          // </div>`;
          let card = `
          <div class="col s12 m6">
            <div class="card">
              <div class="card-image">
                <img src="${image}">
                <span class="card-title">${enteredMovie}</span>
                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
              </div>
              <div class="card-content">
                <p>Nominated category: ${catagories}</p>
                <p>Nominee name: ${name}</p>
                <p>Film year:${filmYear}</p>
                <p></p>
              </div>
            </div>
          </div>`;
            //appends the cards to the row search_results
          $("#search_results").append(card);
        });
      }
    });
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
