import React from 'react';
import styled from 'styled-components';

import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
  useController,
} from 'react-hook-form';

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 18.4rem;
  height: 2.625rem;
  color: #c6c5c5;
  border: 1px solid #fe9d3a;
  border-radius: 5px;
`;

const StyledInput = styled.input`
  flex-shrink: 0;
  padding-left: 2rem;
  border: none;
  outline: none;
  color: #525252;
  font-weight: bold;
`;

// useController을 사용하는 컴포넌트를 위한 type 지정
export type TControl<T extends FieldValues> = {
  placeholder?: string;
  style?: React.CSSProperties;
  className?: string;
  control?: Control<T>;
  name: FieldPath<T>;
  rules?: Omit<
    RegisterOptions<T>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
};

const StyledBasicInput: React.FC<TControl<any>> = ({
  className,
  placeholder,
  style,
  name,
  rules,
  control,
}) => {
  const {
    field: { value, onChange },
  } = useController({ name, rules, control });

  return (
    <InputContainer>
      <StyledInput
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style}
      />
    </InputContainer>
  );
};

export default StyledBasicInput;
