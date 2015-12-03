// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function upload() {
    $('#user_avatar').click().fileupload({
        dataType: 'script',
        type: 'put',
        autoUpload: 'true'
    });
}

$(document).ready(function() {
    $(document).on('click', '#btn-close', function(){
        $('.popup').remove();
    });
});
