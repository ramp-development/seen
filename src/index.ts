import { simulateEvent } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(() => {
  const NAV_SCROLL = () => {
    const NAV = document.querySelector('.nav_component');
    if (!NAV) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 64) {
        NAV?.classList.add('is-scrolled');
      } else {
        NAV?.classList.remove('is-scrolled');
      }
    });
  };

  const CURSOR = () => {
    const WRAPPER = document.querySelector('.cursor_component');
    const CURSOR_SMALL = WRAPPER?.querySelector('.cursor.is-small');
    const CURSOR_LARGE = WRAPPER?.querySelector('.cursor.is-large');
    const INTERACTIVE_ELEMENTS = [
      ...document.querySelectorAll(
        'a, input, label.w-radio, textarea, label.w-checkbox, .button, .slider_button'
      ),
    ];
    INTERACTIVE_ELEMENTS.forEach((ELEMENT) => {
      ELEMENT.addEventListener('mouseover', () => {
        CURSOR_SMALL.style.fontSize = '2rem';
        CURSOR_LARGE.style.fontSize = '0.9rem';
      });

      ELEMENT.addEventListener('mouseout', () => {
        CURSOR_SMALL.style.fontSize = '1rem';
        CURSOR_LARGE.style.fontSize = '1rem';
      });
    });
  };

  const SERVICE_CARDS = () => {
    const CARDS: HTMLLinkElement[] = [...document.querySelectorAll('a.services_card')];
    if (CARDS.length === 0) return;
    CARDS.forEach((CARD) => {
      const LINK = CARD.parentElement.querySelector('[data-service="link"]')?.textContent;
      if (!LINK) return;
      CARD.href = LINK;
    });
  };

  const CONTACT_MODAL = () => {
    const MODAL_BUTTON = document.querySelector('[data-modal="button"]');
    if (!MODAL_BUTTON) return;
    const MODAL_TRIGGERS = [...document.querySelectorAll('[data-modal="trigger"]')];
    MODAL_TRIGGERS.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        simulateEvent(MODAL_BUTTON, 'click');
      });
    });
  };

  const CARD_TAGS = () => {
    const CARDS = [...document.querySelectorAll('.card_component')];
    if (CARDS.length === 0) return;
    CARDS.forEach((CARD) => {
      const TAGS = CARD.parentElement?.querySelector('.tags_wrapper');
      CARD.querySelector('.card_tags')?.appendChild(TAGS);
    });
  };

  NAV_SCROLL();
  CURSOR();
  SERVICE_CARDS();
  CONTACT_MODAL();
  CARD_TAGS();
});
