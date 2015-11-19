// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function upload() {
    $('#user_avatar').click(); //popup upload button
}

$(document).ready(function() {

    $(document).on('change', "input:file", function (){
        $('#edit_user_1').submit();
    });

    $(document).on('click', '.btn-close', function(){
        $('.popup').remove();
    });
});
