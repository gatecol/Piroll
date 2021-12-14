$(document).on('show.bs.modal', '.image-modal', (e) => {
    var image = $(e.relatedTarget).children('img').attr('src');
    $(".img-responsive").attr("src", image);
});