/* eslint-disable no-undef */
$(document).ready(function() {
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/watchlist/userData").then(function (data) {
    $(".member-name").text(data.email);
  });

  $.get("/api/watchlist/").then(function(data) {
    $(".watchlist-area").text(data);
  });

  //Search function for the name of the movie
  function movieSearch() {
    //Takes in user input from DOM
    let category = $("#oscar_category :selected").text();
    let nomineeName = $("#nominee_name")
      .val()
      .trim();
    let movieName = $("#film_nominated")
      .val()
      .trim();
    let filmYear = $("#film_production_year")
      .val()
      .trim();
    let isWinner = $("input[type=checkbox]").prop("checked");
    console.log(isWinner);
    let query = "";

    //What user has selected as a search criteria
    //Searching by categories
    if (category !== "" && category !== "Select Category") {
      if (query !== "") {
        query = query + "&";
      }
      query = query + "catagories=" + category;
    }
    //Searching by nominee name
    if (nomineeName !== "") {
      if (query !== "") {
        query = query + "&";
      }
      query = query + "name=" + nomineeName;
    }
    //Searching by Movie name
    if (movieName !== "") {
      if (query !== "") {
        query = query + "&";
      }
      query = query + "movieName=" + movieName;
    }
    //Searching by year film was produced
    if (filmYear !== "") {
      if (query !== "") {
        query = query + "&";
      }
      query = query + "filmYear=" + filmYear;
    }
    //Checking if the movie was a Oscar winner
    if (isWinner !== false) {
      if (query !== "") {
        query = query + "&";
      }
      query = query + "isWinner=" + isWinner;
    }

    console.log(query);
    $.get(`/api/movies/search?${query}`, function (films) {
      $("#search_results").empty();
      // console.log(enteredMovie);
      console.log(films);
      //This is suppose to display the movie poster but is not aligning how it is supposed to be
      for (m = 0; m < films.length; m++) {

        let id = films[m].id;
        let enteredMovie = films[m].movieName;
        let filmYear = films[m].filmYear;
        let catagories = films[m].catagories;
        let name = films[m].name;
        let isWinner = films[m].isWinner;
        console.log(enteredMovie);
        let image;
        $.ajax({
          url: `http://www.omdbapi.com/?t=${enteredMovie}&apikey=bdaebc3a`,
          method: "GET"
        }).then(function (res) {
          console.log(res.Poster);
          image = res.Poster;
          //Create the cards
          let card = `
            <div class="col s12 m6 l3">
              <div class="card grey">
                <div class="card-image">
                  <img src="${image}">
                  <span class="card-title">${enteredMovie}</span>
                  <a class="btn-floating halfway-fab waves-effect waves-light amber darken-3 add-to-watchlist" data-id="${id}><i class="material-icons">add</i></a>
                </div>
                <div class="card-content">
                  <p>Nominated category: ${catagories}</p>
                  <p>Nominee name: ${name}</p>
                  <p>Film year:${filmYear}</p>
                  <p>Nominated winner: ${isWinner}</p>
                </div>
              </div>
            </div>`;
          //appends the cards to the row search_results
          $("#search_results").append(card);
        });
      }
    });
  }
  $("#submitButton").on("click", function (event) {
    event.preventDefault();
    movieSearch();
    // categorySearch();
  });

  //card layout for watchlists
  //   <div class="col s12 m6 l3">
  //   <div class="card grey darken-1">
  //     <div class="card-content white-text">
  //       <span class="card-title">List Name</span>
  //       <ul>
  //         <li>Film 1</li>
  //         <li>Film 2</li>
  //         <li>Film 3</li>
  //       </ul>
  //     </div>
  //     <div class="card-action">
  //       <button class="btn waves-effect waves-light amber darken-2 delete-list" data-id="listID">
  //         Remove List
  //         <i class="material-icons right">remove</i>
  //       </button>
  //     </div>
  //   </div>
  // </div>
});
