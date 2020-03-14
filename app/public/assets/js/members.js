/* eslint-disable no-undef */
$(document).ready(function() {
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/watchlist/userData").then(function(data) {
    $(".member-name").text(data.email);
  });

  $.get("/api/watchlist/").then(function(data) {
    $(".watchlist-area").text(data);
  });

  function watchlistCreate() {
    let name =
      $("#watchlist_name")
        .val()
        .trim() || "My Watchlist";
    $.post("/api/watchlist", {
      name: name
    }).catch(handleLoginErr);
  }
  watchlistCreate();
});
