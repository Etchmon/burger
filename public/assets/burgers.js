$(function() {
    $(".eat").on("click", function(event) {
        var id = $(this).data("id");

        var eaten = {
            devoured: 1
        }

        $.ajax("/api/burgers/" + id, {
            type:"PUT",
            data: eaten
        }).then(
            function() {
                console.log("MMMMM TASTY")

                location.reload();
            }
        )
    });
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#burg").val().trim(),
          devoured: 0
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
      
})