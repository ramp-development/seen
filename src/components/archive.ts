import { simulateEvent } from "@finsweet/ts-utils";

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
    const CARDS: HTMLLinkElement[] = [...document.querySelectorAll('a.service-card')];
    if (CARDS.length === 0) return;
    CARDS.forEach((CARD) => {
      const QUERY = CARD.querySelector('input[name="link"]').value;
      if (!QUERY) return;
      CARD.href += `?category=${QUERY}`;
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

  const FILTERS = () => {
    const FILTERS_MENU = document.querySelector('.filters_menu');
    if (!FILTERS_MENU) return;
    window.fsAttributes = window.fsAttributes || [];
    window.fsAttributes.push([
      'cmsfilter',
      (filterInstances) => {
        // The callback passes a `filterInstances` array with all the `CMSFilters` instances on the page.
        const [filterInstance] = filterInstances;
        filterInstance.listInstance.on('renderitems', (renderedItems) => {
          window.scrollBy(0, 1);
          window.scrollBy(0, -1);
        });
      },
    ]);

    const FILTERS_EMPTY = document.querySelector('.collection-empty');
    if (!FILTERS_EMPTY) return;
    const RESET = FILTERS_MENU.querySelector('[fs-cmsfilter-element="reset"]');
    const TRIGGERS = [...FILTERS_EMPTY.querySelectorAll('[fs-cmsfilter-element="reset"]')];
    TRIGGERS.forEach((TRIGGER) => {
      TRIGGER.addEventListener('click', () => {
        simulateEvent(RESET, 'click');
      });
    });
  };