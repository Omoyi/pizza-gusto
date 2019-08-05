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
      if($("input#type").val()==="small"){
        var amount = 700
      }
      else if($("input#type").val()==="Medium"){
        var amount = 1000
      }
      else if($("input#type").val()==="Large"){
        var amount = 1500
      }
      else{
        alert("Do re-order please! bad typing")
      }
      if($("select#select").val()==="small"){
        var amount1 = 600
      }
      if($("select#select").val()==="medium"){
        var amount1 = 800
      }
      if($("select#select").val()==="large"){
        var amount1 = 2000
      }
    });
  });
});

