import React from "react";
import Modal from "react-modal";

type Props = {
  isOpen: any;
};

export const Loading = (props: Props) => {
  return (
    <div>
      <Modal isOpen={props.isOpen}>
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      </Modal>
    </div>
  );
};
