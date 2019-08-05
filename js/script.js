//business logic
function ordering (size, crust, topping, number){
  this.size= size;
  this.crust= crust;
  this.topping= topping;
  this.number= number;
};

//user interface logic
$(document).ready(function(){

  $("form#form").submit(function(event){

  event.preventDefault();

  $("#theorder").click(function(){

    var size=$("input#type").val();
    var crust=$("select#select").val();
    var toppings=$("select#sel2").val();
    var number=$("select#sel3").val();
  })
    
  });
});

