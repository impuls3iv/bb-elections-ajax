$(function(){

  // Imagination!
  $.ajax({
    url:"https://bb-election-api.herokuapp.com/",
    method: 'get',
    data: { },
    dataType: 'json'
  }).done(function(responseData){
    $('<li>').appendTo('#list').html(responseData.candidates[0].name);

  }); //end of request

});
