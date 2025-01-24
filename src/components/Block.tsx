import { FC } from "react";

type BlockProps = {
  value?: string | null;
  onClick?: () => void;
};

const Block: FC<BlockProps> = (props) => {
  return (
    <div onClick={props.onClick} className="block">
      {props.value}
    </div>
  );
};

export default Block;
