$(document).ready(function(){

  var isLeapYear = function(year){
    //check if year is divisible by 4, return true
    if(year % 4 === 0){
      return true;
    }
    //otherwise return false
    else{
      return false;
    }
  }

  $("#yearForm").submit(function(event){
    event.preventDefault();
    // collect user input - year - and convert to integer
    var year = parseInt($("#userYear").val());
    alert(isLeapYear(year));
    //check if year is divisible by 100, return false
    //check if year is divisible by 400. return true
  });
});
