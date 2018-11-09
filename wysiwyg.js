function loadBookmarklet() {
  var scriptT = document.createElement("script");
  scriptT.src = "https://cloud.tinymce.com/stable/tinymce.min.js";
  scriptT.type = "text/javascript";
  scriptT.onload = function(){
    tinyMCE.init({ selector : "instructorComments", theme : "simple" }); 
  }
  document.body.appendChild(scriptT);
}
