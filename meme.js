//load your meme image
var check = false;
$("#input").change(function (event) {
  var target = event.target || window.event.srcElement;
  var files = target.files;
  if (FileReader && files && files.length) {
    var fr = new FileReader();
    fr.onload = function () {
      $("#img").attr("src", fr.result);
    };
    fr.readAsDataURL(files[0]);
    check = true;
  } else {
  }
});

//build your progress
var element = $("#main");
var getCanvas;
$("#btn-generate").on("click", function () {
  if (check == true) {
    html2canvas(element, {
      onrendered: function (canvas) {
        getCanvas = canvas;
        $("#btn-generate").css("display", "none");
        $("#download").css("display", "inline-block");
      },
    });
  } else {
    alert("Please upload your meme image");
  }
});

//download your meme
$("#download").on("click", function () {
  var imageData = getCanvas.toDataURL("image/png");
  //now browser starts downloading
  var newData = imageData.replace(
    /^data:image\/png/,
    "data:application/octet-stream"
  );
  $("#download").attr("download", "your_image_name.png").attr("href", newData);
  $('#btn-generate').css("display","inline-block");
  $("#download").css("display", "none");
});


//refresh page
$('#refresh').on('click',function(){
    location.reload();
})