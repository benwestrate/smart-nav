import start from './js';

start();

// import $ from "jquery";


// const deltaScroll         = 5;
// const $bottomNav          = $('[data-hook="nav-bar-bottom"]');
// const $mainNavWrapper     = $('[data-hook="main-nav-wrapper"]');
// const $countrySelector    = $('[data-hook="country-selector-activator"]');
// const $languageSelector   = $('[data-hook="language-selector-activator"]');
// const headerHeight        = $bottomNav.outerHeight();
// const $dropdownEls        = $('.mega-nav__dropdown, .secondary-nav__dropdown');
// const $mobileNavActivator = $('[data-hook="hamburger-nav-button"]');

// let didScroll = false;
// let lastScrollTop = $(window).scrollTop();

// let currentWindowWidth = window.outerWidth;
// let isMobile           = currentWindowWidth < 768;
// let isTablet           = currentWindowWidth < 1025;
// let isDesktop          = currentWindowWidth >= 1025;

// $(window).on("scroll", function() {
//   didScroll = true;
// });

// setInterval(function() {
//   if (didScroll && isDesktop) {
//     let st = $(window).scrollTop();
//     didScroll = false;

//     if (Math.abs(lastScrollTop - st) <= deltaScroll) {
//       return;
//     }

//     if (st > lastScrollTop && st > headerHeight) {
//       $bottomNav.addClass("nav__bar--bottom--up");
//       $bottomNav.removeClass("nav__bar--bottom--down");
//       closeAllDropDowns();
//     } else {
//       if (st + $(window).height() < $(document).height()) {
//         $bottomNav.removeClass("nav__bar--bottom--up");
//         $bottomNav.addClass("nav__bar--bottom--down");
//       }
//     }

//     if (st < headerHeight) {
//       $bottomNav.removeClass("nav__bar--bottom--up");
//     }

//     lastScrollTop = st;
//   }
// }, 75);

// $mainNavWrapper.hover( () => {
//    // hover in handler
//    $bottomNav.removeClass("nav__bar--bottom--up");
// }, () => {
//    // hover out handler 
//    if( !$bottomNav.hasClass('nav__bar--bottom--down') ){
//       // only hide the bottom nav if the nav was hidden before hover in event
//       $bottomNav.addClass("nav__bar--bottom--up");
//    }
// } )


// $mainNavWrapper.click( (event) => {
//     $mainNavWrapper.addClass('nav__wrapper--can-hover');
//     let $target = $(event.target).parent();
//     if( $target.hasClass('mega-nav__item__link') || $target.hasClass('secondary-nav__item__link') ){
//         toggleDropdowns( $target.parent() )
//     }

//     event.stopImmediatePropagation();
//     event.preventDefault();
// })

// $('body').click( () => {
//   $mainNavWrapper.removeClass('nav__wrapper--can-hover');
//   closeAllDropDowns();
//   $('.mega-nav__dropdown').removeClass('mega-nav__dropdown--show');
// } )

// $countrySelector.click(()  => { toggleCountrySelector() });
// $languageSelector.click(() => { toggleLanguageSelector() });

// let toggleCountrySelector  = () => { 
//   $countrySelector.parent().find('.nav__country-selector__regions').toggleClass('nav__country-selector__regions--show');
// }

// let toggleLanguageSelector = () => {
//   $languageSelector.parent().find('.nav__language-selector__languages').toggleClass('nav__language-selector__languages--show');
// }

// $('.mega-nav__item, .secondary-nav__item').hover( function(){
  
//   let currentDropDown    = $(this);
//   let shouldShowDropDown = $mainNavWrapper.hasClass('nav__wrapper--can-hover');

//   if( shouldShowDropDown ) {
//     showDropdown( currentDropDown )
//   }
// })

// const toggleDropdowns = ( $target ) => {

//     let isOpen = $target[0].dataset.open;
    
//     if( isOpen === "true" ){
//         $target[0].dataset.open = "false"
//         closeAllDropDowns();
//     } else {
//         showDropdown( $target.parent() );
//     }
// }

// const showDropdown = ( $dropdownActivator ) => {
//   closeAllDropDowns();
//   let $dropdown = $dropdownActivator.find('.mega-nav__dropdown, .secondary-nav__dropdown');
//   let dropdownClass = $dropdown.attr("class");

//   if( dropdownClass ){
//     $bottomNav.addClass('nav__bar--bottom--dropdown-open');
//     $dropdown.addClass(`${dropdownClass}--show`);
//     $dropdownActivator[0].dataset.open = true;
//     if( isDesktop ) {
//         let { left } = $dropdownActivator.position();
//         $dropdown.css('left', left - 35);
//     }
//   }
// }

// const closeAllDropDowns = ( ) => {
//   $bottomNav.removeClass('nav__bar--bottom--dropdown-open');
//   $dropdownEls.removeClass('mega-nav__dropdown--show');
//   $dropdownEls.removeClass('secondary-nav__dropdown--show');
// }


// const toggleMobileNav = () => {
//     $bottomNav.toggleClass('nav__bar--bottom--mobile-show ')
// }

// $mobileNavActivator.click(toggleMobileNav);
