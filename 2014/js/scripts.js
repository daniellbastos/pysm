$(function() {
    $('.trigger-modal').on('click', function(){
        $(this).next().modal();
        return false;
    });
});