import React, { FC } from "react";

type Props = {
  accountAddress: string;
  onClick: () => void;
};

const AddressBlock: FC<Props> = ({ accountAddress, onClick }) => {
  return (
    <div className="address">
      {`${accountAddress.slice(0, 23)}...`}
      <button onClick={onClick}>
        <span></span>
        <span></span>
      </button>
      <div className="subtext">CONNECTED</div>
    </div>
  );
};

export default AddressBlock;
