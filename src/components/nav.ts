export const nav = () => {
    // eslint-disable-next-line no-console
    console.log('nav');

    const component = document.querySelector('.nav_component');
    if (!component) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 64) {
        component?.classList.add('is-scrolled');
        } else {
        component?.classList.remove('is-scrolled');
        }
    });
}