$(function() {
    $("#new-burger").on("click", function(event) {
      event.preventDefault();
      var newBurgerName = $("#new-burger-name").val();
      var devoured = false;
  
      var newBurger = {
          name: newBurgerName,
          devoured: devoured
      };

      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
      }).then(
          function() {
              location.reload();
          }
      );

    });

    $(".devour-it").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr("data-id");
        var devoured = true;

        var newDevouredStatus = {
            id: id,
            devoured: devoured
        };

        $.ajax("/api/burgers/:id", {
            type: "PUT",
            data: newDevouredStatus
        }).then(function() {
            location.reload();
        });

    });
  });