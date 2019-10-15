

export const currentViewport = () => {
    let currentWindowWidth = window.outerWidth;
    let isMobile           = currentWindowWidth < 768;
    let isTablet           = currentWindowWidth < 1025;
    let isDesktop          = currentWindowWidth >= 1025;

    return { isDesktop, isMobile, isTablet, currentWindowWidth };
}

