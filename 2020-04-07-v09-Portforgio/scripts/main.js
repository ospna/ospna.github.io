document.getElementById('button').addEventListener("click", function () {
    document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function () {
    document.querySelector('.bg-modal').style.display = "none";
});

//$(".gallery").magnificPopup({
//    delegate: 'a',
//    type: 'image',
//    gallery: {
//        enabled: true
//    }
//});