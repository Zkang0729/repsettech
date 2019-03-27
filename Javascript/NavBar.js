var open = false;

$(".dropdown").hover(() => {
  if (!open) {
    $(".fa-sort-down").toggleClass("open");
  }
});