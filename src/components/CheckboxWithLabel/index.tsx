import React, { useState } from 'react';

interface CheckboxWithLabelProp {
  labelOn: string;
  labelOff: string;
}

const CheckboxWithLabel: React.FC<CheckboxWithLabelProp> = ({
  labelOff,
  labelOn
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? labelOn : labelOff}
    </label>
  );
}

export default CheckboxWithLabel;