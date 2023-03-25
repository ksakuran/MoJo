import React from "react";
import Button from './../Common/Button';

function CustomizeChecklist(props) {

  const { setIsCustomize } = props;

  return (
    <section>
      <h1>CustomizeChecklist</h1>

      <Button onClickHandler={() => setIsCustomize(false)}> save </Button>
    </section>
  );
};

export default CustomizeChecklist;