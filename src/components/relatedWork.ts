import Splide from "@splidejs/splide";

export const relatedWork = () => {
    // eslint-disable-next-line no-console
    console.log('relatedWork');

    const component = document.querySelector<HTMLDivElement>('.related-work_component');
    if (!component) return;

    const splideComponent = component.querySelector<HTMLDivElement>('.splide');
    if (!splideComponent) return;

    const slider = new Splide(splideComponent, {
        pagination: false,
        gap: 'var(--site--gap-main)',
        type: 'loop',
    })
    slider.mount();
}