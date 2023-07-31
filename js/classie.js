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


window.onload = function() {
    if (window.matchMedia('(min-width: 768px)').matches) {
        // 针对 .col-sm-3 的 h2 和 p 元素
        var maxH2Height = 0;
        var maxPHeight = 0;
        var cols = document.querySelectorAll('.col-sm-3');


        for (var i = 0; i < cols.length; i++) {
            var h2 = cols[i].querySelector('h2');
            var p = cols[i].querySelectorAll('p');


            if (h2.offsetHeight > maxH2Height) {
                maxH2Height = h2.offsetHeight;
            }
            for (var j = 0; j < p.length; j++) {
                if (p[j].offsetHeight > maxPHeight) {
                    maxPHeight = p[j].offsetHeight;
                }
            }

        }

        for (var i = 0; i < cols.length; i++) {
            var h2 = cols[i].querySelector('h2');
            var p = cols[i].querySelectorAll('p');

            h2.style.height = maxH2Height + 'px';
            for (var j = 0; j < p.length; j++) {
                p[j].style.height = maxPHeight + 'px';
            }
        }

        // 针对 .col-lg-4 的 li 元素
        var maxLiHeight = 0;
        var colLg4s = document.querySelectorAll('.col-lg-4');

        for (var i = 0; i < colLg4s.length; i++) {
            var lis = colLg4s[i].querySelectorAll('p');

            for (var j = 0; j < lis.length; j++) {
                if (lis[j].offsetHeight > maxLiHeight) {
                    maxLiHeight = lis[j].offsetHeight;
                }
            }
        }

        for (var i = 0; i < colLg4s.length; i++) {
            var lis = colLg4s[i].querySelectorAll('p');

            for (var j = 0; j < lis.length; j++) {
                lis[j].style.height = maxLiHeight + 'px';
            }
        }


        var maxPricingTitleHeight = 0;
            var pricingTitles = document.querySelectorAll('.pricing-title');

            for (var i = 0; i < pricingTitles.length; i++) {
                if (pricingTitles[i].offsetHeight > maxPricingTitleHeight) {
                    maxPricingTitleHeight = pricingTitles[i].offsetHeight;
                }
            }

            for (var i = 0; i < pricingTitles.length; i++) {
                pricingTitles[i].style.height = maxPricingTitleHeight + 'px';
            }

    }
};