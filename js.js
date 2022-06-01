var resimsirasi = 1
var totalImages = 11


var time = window.setInterval(function work() {
    var image = document.getElementById("image")
    resimsirasi = resimsirasi + 1
    if (resimsirasi > totalImages) {
        resimsirasi = 1
    }
    if (resimsirasi < 1) {
        resimsirasi = totalImages
    }

    image.src = "foto/images" + resimsirasi + ".jpeg"



}, 1500)

function ornek() {
    time = window.setInterval(function work() {
        image = document.getElementById("image")
        resimsirasi = resimsirasi + 1
        if (resimsirasi > totalImages) {
            resimsirasi = 1
        }
        if (resimsirasi < 1) {
            resimsirasi = totalImages
        }

        image.src = "foto/images" + resimsirasi + ".jpeg"



    }, 1500)
}

function ornek1() {
    clearInterval(time)
}