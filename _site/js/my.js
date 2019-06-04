$(window).on('load', function(){;
     $('#loader-bg').hide();

 });



function display(){
  document.getElementById("about-bg").style.display = "block";
    document.getElementById("about-nav").style.fontWeight = "700";
}

function hide(){
  document.getElementById("about-bg").style.display = "none";
      document.getElementById("about-nav").style.fontWeight = "normal";
}

 $(document).ready(function() {
   if (!readCookie("adSeen")) {
     $("#loading").fadeIn("slow");
     createCookie("adSeen", "1", 1000);
   }
 });

 function createCookie(name, value, days) {
   if (days) {
     var date = new Date();
     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
     var expires = "; expires=" + date.toGMTString();
   } else var expires = "";
   document.cookie = name + "=" + value + expires + "; path=/";
 }

 function readCookie(name) {
   var nameEQ = name + "=";
   var ca = document.cookie.split(';');
   for (var i = 0; i < ca.length; i++) {
     var c = ca[i];
     while (c.charAt(0) == ' ') c = c.substring(1, c.length);
     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
   }
   return null;
 }



$(document).ready(function() {
    $(".fancybox").fancybox({
        type: 'iframe',
        beforeLoad: function() {
            var caption = this.element.attr('data-caption');
            this.tpl.wrap = '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div><p>'+caption+'</p></div></div></div>'
                
        },
        
        helpers:  {
            title : {
                type : 'inside',
                position: 'bottom'
            }
        }
    });
});
