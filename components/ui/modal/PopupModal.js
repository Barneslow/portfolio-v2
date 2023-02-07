const PopupModal = ({ setModalInView }) => {
  return (
    <>
      <h1>Ciara loves D</h1>
      <button onClick={() => setModalInView(false)}>Close</button>
    </>
  );
};

export default PopupModal;
