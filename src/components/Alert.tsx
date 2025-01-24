import { FC, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { GiPodiumWinner } from "react-icons/gi";
import { SiCoreldraw } from "react-icons/si";

type AlertProps = {
  message: string;
  onClose: () => void;
  type: "draw" | "win";
};

const Alert: FC<AlertProps> = ({ message, onClose, type }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Close alert after 3 seconds
    }, 3000);

    // Cleanup the timer if the component is unmounted or if the alert is closed
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="alert-container">
      {type === "win" && <GiPodiumWinner />}
      {type === "draw" && <SiCoreldraw />}
      <p className="alert-message">{message}</p>
      <button onClick={onClose} className="alert-close-btn">
        <RxCross2 className="alert-close-icon" />
      </button>
    </div>
  );
};

export default Alert;
