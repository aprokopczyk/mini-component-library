import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  large: {
    iconSize: 24,
    fontSize: 18,
    height: 36,
    borderThickness: 2,
  },
  small: {
    iconSize: 16,
    fontSize: 14,
    height: 36,
    borderThickness: 1,
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }
  return (
      <Wrapper>
        <VisuallyHidden>{label}</VisuallyHidden>
        <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
          <Icon id={icon} size={styles.iconSize} />
        </IconWrapper>
        <TextInput placeholder={placeholder}
            {...delegated}
            style={{
              '--width': width + 'px',
              '--height': styles.height / 16 + 'rem',
              '--border-thickness': styles.borderThickness + 'px',
              '--font-size': styles.fontSize / 16 + 'rem',
            }}
        />
      </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700}
  border-bottom: 1px solid ${COLORS.black};
  width: var(--width);
  align-items: center;
  
  &;hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
