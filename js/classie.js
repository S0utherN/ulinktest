/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

    'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

    function classReg( className ) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ( 'classList' in document.documentElement ) {
        hasClass = function( elem, c ) {
            return elem.classList.contains( c );
        };
        addClass = function( elem, c ) {
            elem.classList.add( c );
        };
        removeClass = function( elem, c ) {
            elem.classList.remove( c );
        };
    }
    else {
        hasClass = function( elem, c ) {
            return classReg( c ).test( elem.className );
        };
        addClass = function( elem, c ) {
            if ( !hasClass( elem, c ) ) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function( elem, c ) {
            elem.className = elem.className.replace( classReg( c ), ' ' );
        };
    }

    function toggleClass( elem, c ) {
        var fn = hasClass( elem, c ) ? removeClass : addClass;
        fn( elem, c );
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

// transport
    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( classie );
    } else {
        // browser global
        window.classie = classie;
    }

})( window );

// window.onscroll = function() {
//     var scroll = window.scrollY;
//     document.body.style.backgroundPosition = scroll + "px" + " 0px";
// };

let stage1 = document.getElementById('stage-1');
let stage2 = document.getElementById('stage-2');
let scrollTimeout;  // 用于检测滚动/滑动时间的变量
let atStage1 = true;  // 记录当前的stage

window.addEventListener('wheel', function(e) {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function() {  // 延迟切换，防止过于灵敏
    switchStage(e.deltaY, e.target);
  }, 100);
});

window.addEventListener('touchstart', function(e) {
  this.startY = e.touches[0].pageY;
});

window.addEventListener('touchmove', function(e) {
  clearTimeout(scrollTimeout);
  let deltaY = e.touches[0].pageY - this.startY;
  scrollTimeout = setTimeout(function() {  // 延迟切换，防止过于灵敏
    switchStage(deltaY, e.target);
  }, 100);
});

function switchStage(deltaY, target) {
  if (deltaY > 0 && atStage1) {  // 在stage1时下滚或下滑
    // stage1.style.transform = 'translateY(-100vh)';
    // stage2.style.transform = 'translateY(0)';
    // atStage1 = false;
  } else if (deltaY < 0 && !atStage1 && target.scrollTop === 0) {  // 在stage2顶部时上滚或上滑
    // stage1.style.transform = 'translateY(0)';
    // stage2.style.transform = 'translateY(100vh)';
    // atStage1 = true;
  }
}


  




  

