"use strict";

$(document).ready(function () {

    var now = moment();

    function displayDate() {
        $("#date").text(now.d);
    }

    displayDate();
});