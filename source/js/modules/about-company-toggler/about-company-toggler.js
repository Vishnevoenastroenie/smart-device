const aboutCompanyParent = document.querySelector('[data-accordion="parent"]');
const accordionElement = aboutCompanyParent.querySelector('[data-accordion="element"]');
const accordionButton = aboutCompanyParent.querySelector('[data-accordion="button"]');

const accordionButtonToggler = () => {
  if (!accordionElement.classList.contains('is-active')) {
    accordionButton.textContent = 'подробнее';
  } else {
    accordionButton.textContent = 'свернуть';
  }
};

const showsButtonDetails = () => {
  if (aboutCompanyParent && accordionButton && accordionElement) {
    accordionButton.addEventListener('click', accordionButtonToggler);
  }
};

export {showsButtonDetails};
