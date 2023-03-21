
const inputElements = document.querySelectorAll('[data-mask="phone"]');

const addMaskPhone = () => {
  if (!inputElements) {
    return;
  }

  const phoneOptions = {
    mask: '+{7}(000)000-00-00',
  };

  inputElements.forEach((el) => {
    // eslint-disable-next-line no-undef
    iMask(el, phoneOptions);
  });
};

export {addMaskPhone};
