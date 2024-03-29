import React from 'react';

import '../../themes/common/InlineEdit.scss';

export interface InlineEditProps {
  field: string;
  id: number;
  inputType: "text" | "textarea" | "number";
  onChange: (id: number, field: string, value: string | number) => void;
  value: string | number;
}

const InlineEdit = (props: InlineEditProps) => {
  const { field, id, inputType, onChange, value } = props;

  const onKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.target.blur();
    }
  }

  const renderInput = () => {
    if (inputType === "text") {
      return (
        <input
          onChange={(e: any) => onChange(id, field, e.target.value)}
          onKeyDown={onKeyDown}
          type="text"
          value={value}
        />
      )
    } else if (inputType === "textarea") {
      return (
        <textarea
          onChange={(e: any) => onChange(id, field, e.target.value)}
          onKeyDown={onKeyDown}
          value={value}
        />
      )
    } else if (inputType === "number") {
      return (
        <input
          onChange={(e: any) => onChange(id, field, e.target.value)}
          onKeyDown={onKeyDown}
          type="number"
          value={value}
        />
      )
    }
  }

  return (
    <div className='inline-edit'>
      {renderInput()}
    </div>
  );
};

export default InlineEdit;
