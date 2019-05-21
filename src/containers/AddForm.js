import React, { useState, useRef, useEffect } from "react";
import { AddForm as AddFormBase } from "components";

const AddForm = ({
  columnIndex,
  children,
  onAddCard,
  onAddColumn,
  isEmptyColumn
}) => {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [showForm]);

  const onAdd = () => {
    if (isEmptyColumn) {
      onAddColumn(value);
    } else {
      onAddCard(columnIndex, value);
    }
    setValue("");
    setShowForm(false);
  };

  return (
    <AddFormBase
      onAdd={onAdd}
      showForm={showForm}
      setShowForm={setShowForm}
      value={value}
      setValue={setValue}
      textareaRef={textareaRef}
    />
  );
};

export default AddForm;
