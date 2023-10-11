import React from "react";
import { Button } from "semantic-ui-react";

const BotonModal = ({handleShow}) => {
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Usuario
      </Button>
    </div>
  );
};

export default BotonModal;