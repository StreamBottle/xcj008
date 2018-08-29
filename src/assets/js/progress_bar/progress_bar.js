var script= document.getElementsByTagName("script");
var loading= document.getElementById('progressBarLoading');
var conta= document.getElementById("progressBar");
var percentage= document.getElementById("percentage");
var app= document.getElementById("app");
var slength= script.length;
var width= 0;
function init(){
for(var i=0;i<slength;i++){
script[i].onload = (function(i){  
  var i=i;
  var num=(i/slength)*100;
  animate(num);
})(i)
}}

  function animate(max) {
          var max=max;
      if (width < max) {
          width++;
          loading.style.width=width+'%';
          percentage.innerHTML=width+'%';
          setTimeout(function(){animate(max);},10)
          // return max * arguments.callee(max,status);
      } else if(max===100){
          setTimeout(function(){conta.style.display='none';app.style.display='block';},100);
      }          
    };
    document.ready = function (callback) {
            ///兼容FF,Google
            if (document.addEventListener) {
                document.addEventListener('DOMContentLoaded', function () {
                    document.removeEventListener('DOMContentLoaded', arguments.callee, false);
                    callback();
                }, false)
            }
             //兼容IE
            else if (document.attachEvent) {
                document.attachEvent('onreadystatechange', function () {
                      if (document.readyState == "complete") {
                                document.detachEvent("onreadystatechange", arguments.callee);
                                callback();
                       }
                })
            }
            else if (document.lastChild == document.body) {
                callback();
            }
        }

        document.ready(function () {
             animate(100);

        });
    // window.onload=function(){
    //     animate(100);
    // }
(function(){init();})(); 