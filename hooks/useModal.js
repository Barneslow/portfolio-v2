import { useState } from "react";

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return { modalOpen, close, open };
};

export const useModal2 = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return { modalOpen, close, open };
};

export default useModal;
