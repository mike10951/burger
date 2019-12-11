$(function () {

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim()
        };

        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Created new burger");
                location.reload();
            }
        );
    });

});