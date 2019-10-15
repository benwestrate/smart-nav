import $ from 'jquery';
import { currentViewport } from './getCurrentViewPort';

export default (el, closeAllDropDowns) => {
    console.log(`[ test ]`, el);

    let didScroll = false;
    let lastScrollTop = 0;
    const deltaScroll = 5;
    const $bottomNav = $($(el).find('[data-hook="nav-bar-bottom"]'));
    const headerHeight = $bottomNav.outerHeight();

    $(window).on("scroll", function () {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll && currentViewport().isDesktop) {
            let st = $(window).scrollTop();
            didScroll = false;

            if (Math.abs(lastScrollTop - st) <= deltaScroll) {
                return;
            }

            if (st > lastScrollTop && st > headerHeight) {
                $bottomNav.addClass("nav__bar--bottom--up");
                $bottomNav.removeClass("nav__bar--bottom--down");
                closeAllDropDowns();
            } else {
                if (st + $(window).height() < $(document).height()) {
                    $bottomNav.removeClass("nav__bar--bottom--up");
                    $bottomNav.addClass("nav__bar--bottom--down");
                }
            }

            if (st < headerHeight) {
                $bottomNav.removeClass("nav__bar--bottom--up");
            }

            lastScrollTop = st;
        }
    }, 75);

}