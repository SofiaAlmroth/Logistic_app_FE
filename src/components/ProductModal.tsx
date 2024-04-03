// import DatePicker from "react-datepicker";
// import { useState } from "react";
import { useRef } from "react";

function ProductModal() {
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        onClick={() => modalRef.current?.showModal()}
        className="custom-button"
      >
        New Order
      </button>
      <dialog id="modal" className="modal" ref={modalRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default ProductModal;

// const [startDate, setStartDate] = useState(new Date());

// const handleDateChange = (date: Date) => {
//   if (date !== null) {
//     setStartDate(date);
//   }
// };

// return <DatePicker selected={startDate} onChange={handleDateChange} />;
