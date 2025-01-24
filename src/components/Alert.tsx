import { FC, useEffect } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

type AlertProps = {
  message: string;
  onClose: () => void;
};

const Alert: FC<AlertProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Close alert after 3 seconds
    }, 3000);

    // Cleanup the timer if the component is unmounted or if the alert is closed
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="alert-container">
      <AiOutlineWarning className="alert-icon" />
      <p className="alert-message">{message}</p>
      <button onClick={onClose} className="alert-close-btn">
        <RxCross2 className="alert-close-icon" />
      </button>
    </div>
  );
};

export default Alert;
