const aboutCompanyParent = document.querySelector('[data-accordion="parent"]');
const accordionElement = aboutCompanyParent.querySelector('[data-accordion="element"]');
const accordionButton = aboutCompanyParent.querySelector('[data-accordion="button"]');

const accordionButtonToggler = () => {
  if (!accordionElement.classList.contains('is-active')) {
    accordionElement.classList.add('is-active');
    accordionButton.textContent = 'свернуть';
  } else {
    accordionElement.classList.remove('is-active');
    accordionButton.textContent = 'подробнее';
  }
};

const showsButtonDetails = () => {
  if (aboutCompanyParent && accordionButton && accordionElement) {
    accordionButton.addEventListener('click', accordionButtonToggler);
  }
};

export {showsButtonDetails};
