import React from "react";
import Form from "react-bootstrap/Form";

function FormElement(props) {
  return (
    <div>
      <Form.Group controlId={props.id}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
          type={props.fieldType || "text"}
          value={props.value}
          onChange={props.onChange}
        />
      </Form.Group>
    </div>
  );
}

export default FormElement;
