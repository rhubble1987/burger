$(function() {
    $("#new-burger").on("click", function(event) {
      event.preventDefault();
      var newBurgerName = $("#new-burger-name").val();
  
      var newBurger = {
          name: newBurgerName,
      };

      console.log(newBurger);

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

        var newDevouredStatus = {
            id: id,
        };

        console.log(newDevouredStatus);

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: newDevouredStatus
        }).then(function() {
            location.reload();
        });

    });
  });