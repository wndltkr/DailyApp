import {useState} from 'react';

function useModal() {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => {
    setIsVisible(true);
  };

  const hide = () => {
    setIsVisible(false);
  };

  return {isVisible, hide, show};
}

export default useModal;
