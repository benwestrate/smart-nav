import $ from 'jquery';
import { currentViewport } from './getCurrentViewPort';

export class Dropdown {

    constructor( el, { showDropdownFunc, hideDropdownFunc, closeAllDropdowns }, useOffset = true, useHover = true){

        this.isOpen            = false;
        this.canHover          = false;
        this.useOffset         = useOffset;
        this.useHover          = useHover;
        this.wrapperEl         = $(el);
        this.dropdownEl        = $(el).children('[class*="__dropdown"], [class*="__regions"], [class*="__languages"]');
        this.activator         = $(el).children('[class*="__item__link"], [class*="__activator"]');
        this.baseClass         = this.dropdownEl.attr("class");
        this.showDropdownFunc  = showDropdownFunc;
        this.hideDropdownFunc  = hideDropdownFunc;
        this.closeAllDropdowns = closeAllDropdowns;
        this.baseOffset        = el.dataset.baseOffset ? parseInt( el.dataset.baseOffset ) : 0;

        this.open          = this.open.bind(this);
        this.close         = this.close.bind(this);
        this.toggle        = this.toggle.bind(this);
        this.bindListeners = this.bindListeners.bind(this);

        this.bindListeners();
        
        el.dropdown = this;
    }

    open( ) {
        this.closeAllDropdowns();
        this.isOpen = true;

        if( currentViewport().isDesktop && this.useOffset ){
            let {left} = this.activator.position();
            this.dropdownEl.css('left', left - 35 + this.baseOffset);
        }

        this.dropdownEl.addClass(`${this.baseClass}--show`);
        this.showDropdownFunc();
    }

    close( ) {

        this.isOpen = false;
        this.dropdownEl.removeClass(`${this.baseClass}--show`);

    }

    toggle( event ){
        if( this.isOpen ){
            this.close();
        } else {
            this.open();
        }

        if( !currentViewport().isDesktop ){
            event.stopImmediatePropagation();
            event.preventDefault();
        }
    }

    hover(){
        // if( this.useHover ){
        //     this.wrapperEl.hover(() => {
        //         if( this.canHover ) this.open()
        //     }, this.close );
        // }
        

    }

    bindListeners( ) {
        this.activator.click( this.toggle )
        this.hover();
    }
}