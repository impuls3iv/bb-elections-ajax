$(function(){

  //list injection function
  function injector(){
    $('#list').html('');
    $.ajax({
      url:"https://bb-election-api.herokuapp.com/",
      method: 'get',
      data: { },
      dataType: 'json'
    }).done(function(responseData){
      for (i = 0; i < responseData.candidates.length; i++) { //go through all candidates
        $('<li>').appendTo('#list')
                 .html(responseData.candidates[i].name);
        $('<li>').appendTo('#list')
                 .html(responseData.candidates[i].votes);
      };//end for loop
    }); //end of request
  }; //end of function


  $('#button').on('click', injector);
  $(window).on('load', injector);

});
