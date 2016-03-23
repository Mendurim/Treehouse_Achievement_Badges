$(document).ready(function(){
  getData();  
  function getData(){

  $('form').submit(function (evt) {
    var $submitButton = $('#submit');
    var $searchField = $('#search');
    evt.preventDefault();
    $searchField.prop("disabled",true);
    $submitButton.attr("disabled", true).val("searching....");
    var animal = $searchField.val();
    $('#photos').html('');
    var APIurl = "https://teamtreehouse.com/"+animal+".json";
    // debugger
    $.ajax({
        url : APIurl, 
        dataType : 'json', 
        type: 'get',
        cache: false, 
        success: function(data){
          var photoHTML = ''; 
          // if(data.name>0){
          $.each(data.badges,function(i,photo){
            //console.log(data.badges[index].icon_url); 
            var badges = data.badges[i].icon_url; 
            photoHTML += '<li class="grid-25 tablet-grid-50">';
            photoHTML += '<a href="' + badges + '" class="image">';
            photoHTML += '<img src="' + badges + '"></a></li>';

          });
          // }else{
          //   photoHTML = "<p>No badges found that match: " + animal + ".</p>"
          // }// end of if statement 
          $('#photos').html(photoHTML); 
          $searchField.prop("disabled", false);
          $submitButton.attr("disabled", false).val("Search");
        } //success function data
      }); // end of ajax 

    }); // end of function getData
  }
}); // end ready


