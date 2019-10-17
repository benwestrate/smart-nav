import scrollListener from './globalNav__scroll';
import {
    Dropdown
} from './dropdowns';
import {
    currentViewport
} from './getCurrentViewPort'
import $ from 'jquery';

class GlobalNav {

    constructor(data, el) {

        this.el                        = $(el);
        this.top                       = $(el).find('.nav__bar--top');
        this.bottom                    = $(el).find('.nav__bar--bottom');
        this.countrySelectorActivator  = this.top.find('[data-hook="country-selector-activator"]');
        this.languageSelectorActivator = this.top.find('[data-hook="language-selector-activator"]');
        this.mobileNavActivator        = this.top.find('[data-hook="hamburger-nav-button"]');
        this.countrySelector           = this.countrySelectorActivator.parent();
        this.languageSelector          = this.languageSelectorActivator.parent();
        this.data                      = data;
        this.dropdowns                 = [];


        this.registerListeners         = this.registerListeners.bind(this);
        this.registerDropdowns         = this.registerDropdowns.bind(this);
        this.showDropdownFunc          = this.showDropdownFunc.bind(this);
        this.hideDropdownFunc          = this.hideDropdownFunc.bind(this);
        this.closeAllDropdowns         = this.closeAllDropdowns.bind(this);
        this.navClickRegister          = this.navClickRegister.bind(this);
        this.updateCanHoverOnDropdowns = this.updateCanHoverOnDropdowns.bind(this);
        this.registerMobileToggle      = this.registerMobileToggle.bind(this);


        this.registerListeners();
        this.registerDropdowns();
    }


    showDropdownFunc() {
        if( currentViewport().isDesktop ){ 
            this.bottom.addClass('nav__bar--bottom--dropdown-open')
        }
    }

    hideDropdownFunc() {
        this.bottom.removeClass('nav__bar--bottom--dropdown-open')
    }

    updateCanHoverOnDropdowns(canHover) {
        this.dropdowns.forEach(dropdown => {
            dropdown.canHover = canHover
        });
    }

    closeAllDropdowns() {
        this.dropdowns.forEach(dropdown => {
            dropdown.close();
        })
        this.hideDropdownFunc();
    }

    navClickRegister() {
        this.el.click((event) => {

            if (currentViewport().isDesktop) {
                this.el.addClass('nav__wrapper--can-hover')
                this.updateCanHoverOnDropdowns(true);
            }

            let dropdown = $(event.target).parent()[0].dropdown;
            if (dropdown) {
                dropdown.toggle();
            }

            event.stopImmediatePropagation();
            event.preventDefault();
        })
    }

    registerBodyClick() {
        $('body').click(() => {
            if( currentViewport().isDesktop ){
                this.el.removeClass('nav__wrapper--can-hover');
                this.updateCanHoverOnDropdowns(false);
                this.closeAllDropdowns();
            }
        })
    }

    registerMobileToggle(){
        this.mobileNavActivator.on('touchstart', (event) => {
            this.mobileNavActivator.find('.nav__hamburger__icon').toggleClass('nav__hamburger__icon--open');
            this.bottom.toggleClass('nav__bar--bottom--mobile-show');
        })
    }

    registerListeners() {
        scrollListener(this.el, this.closeAllDropdowns)
        this.navClickRegister();
        this.registerBodyClick();
        this.registerMobileToggle();
    }

    registerDropdowns() {
        let {
            showDropdownFunc,
            hideDropdownFunc,
            closeAllDropdowns
        } = this;
        let dropdowns = $(this.el).find('.mega-nav__item, .secondary-nav__item--dropdown');
        
        dropdowns.each((index, dropdown) => {

            this.dropdowns.push(new Dropdown(
                dropdown, {
                    showDropdownFunc,
                    hideDropdownFunc,
                    closeAllDropdowns
                }
            ));

        });

        this.dropdowns.push( new Dropdown(
            this.countrySelector,
            {
                showDropdownFunc,
                hideDropdownFunc,
                closeAllDropdowns
            },
            false,
            false
        ) )
        
        this.dropdowns.push( new Dropdown(
            this.languageSelector,
            {
                showDropdownFunc,
                hideDropdownFunc,
                closeAllDropdowns
            },
            false,
            false
        ) )

    }

}


export const GlobalNavComponent = {
    'name': 'globalNav',
    'component': GlobalNav
}

export default GlobalNavComponent;