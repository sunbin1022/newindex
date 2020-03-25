// (function() {
//     var setFontSize = function() {
//         var html = document.documentElement || document.getElementsByTagName('html')[0]
//         html.style.fontSize = html.clientWidth / 7.5 + 'px'
//     }
//     setFontSize()
//     var evt = ('onorientationchange' in window) ? 'orientationchange' : 'resize'
//     window.addEventListener(evt, function() {
//         setTimeout(function() {
//             setFontSize()
//         }, 200)
//     })
// })()

function osize(){
  	var width = document.documentElement.clientWidth; 
  	if(width > 750){
    	width = 750;
  	}
  	var size = width/7.5;
  	document.documentElement.style.fontSize=size + 'px';
}
osize() 
window.onresize = function(){osize()}

