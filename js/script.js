function ordering (size, crust, topping, number){
  this.size= size;
  this.crust= crust;
  this.topping= topping;
  this.number= number;
}
$(document).ready(function(){

  $("form#form").submit(function(event){
    event.preventDefault();
    var size=$("input#type").val();
    var crust=$("select#select").val();
    var toppings=$("select#sel2").val();
    var number=$("select#sel3").val();
    if(size=="small"){
    
    }
  });
});

