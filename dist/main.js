"use strict";

console.log(1+1);

    var now = moment();

    console.log(now._d);

    function displayDate() {
        $("#date").text("hello");
        console.log(now._d);
    }

    // $( window ).on( "load", function() {
    //     $("#date").text(now._d);
    //     console.log( "window loaded" );
    // });

    $( document ).ready(function() {
        $("#date").text(now._d);
        console.log( "doc loaded" );
    });


    displayDate();