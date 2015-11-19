// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function upload() {
    $('#user_avatar').click();
}

$(function() {
    $("input:file").change(function (){
        $('#edit_user_2').submit();
    });
});