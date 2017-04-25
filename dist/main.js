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

        let five = 5;
        $("#time").text("five")

        

        var timer = moment.duration(five, "seconds").timer(function() { 
            console.log("timer finished")
            $("#time").text("timer finished")
        });

        var remainingDuration = timer.getRemainingDuration();
        for (let i = remainingDuration; i > 0; i --){
            console.log(i);
        }
        
    });

    

    displayDate();