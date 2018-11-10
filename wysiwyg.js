function loadBookmarklet() {
  var scriptT = document.createElement("script");
  scriptT.src = "https://cloud.tinymce.com/stable/tinymce.min.js?apiKey=zon5v23j3uazf0mu4agta3ae9zpzsytu9m62u2mxymok2w46";
  scriptT.type = "text/javascript";
  scriptT.onload = function(){
    tinyMCE.init({ 
      selector: "#instructorComments", 
      menubar: false,
      plugins: [
        'advlist autolink autoresize lists link image charmap preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code',
        'insertdatetime media nonbreaking table contextmenu directionality',
        'template paste textcolor colorpicker textpattern imagetools codesample'
      ],
      toolbar: 'bold italic underline sizeselect fontselect fontsizeselect | hr alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | insertfile undo redo | forecolor backcolor | code',
      fontsize_formats: "8px 10px 12px 14px 18px 24px 36px",
      width: 600
    }); 
  }
  document.body.appendChild(scriptT);
  $("#btnInsertComment").click(function(e){ 
    e.preventDefault(); 
    tinymce.activeEditor.execCommand('mceInsertContent', false, $("#insertFeedbackSnippets").find(":selected").attr("title"));
  })
}
$('script[src*="tinymce.min.js"]').remove();
delete tinyMCE;
delete tinymce;
loadBookmarklet();
