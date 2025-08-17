var images = ["resimler/k/yardak.jpeg" , "resimler/k/hayrok.jpeg" ,"resimler/k/raufk.jpeg" ,"resimler/k/cgn.jpeg" , "resimler/k/uyutafa.jpeg"]
var index = 0


function chanceImage() {
  var img = document.getElementById("i")
  img.src = images[index]
  index++;
  if( index == images.length) {
    index =0
    }
}
setInterval(chanceImage, 3000);
