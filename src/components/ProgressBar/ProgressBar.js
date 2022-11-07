/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import VisuallyHidden from '../VisuallyHidden';


const STYLES = {
    large: {
        height: 16,
        padding: 4,
        radius: 8
    },
    medium: {
        height: 12,
        padding: 0,
        radius: 4
    },
    small: {
        height: 8,
        padding: 0,
        radius: 4

    }
};


const ProgressBar = ({value, size}) => {

    const styles = STYLES[size];

    if (!styles) {
        throw new Error(`Unknown size passed to ProgressBar: ${size}`);
    }

    return <Wrapper
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{
            '--padding': styles.padding + 'px',
            '--radius': styles.radius + 'px',
        }}
    >
        <VisuallyHidden>{value}</VisuallyHidden>
        <BarWrapper>
            <Bar style={{
                '--width': value + '%',
                '--height': styles.height + 'px',
            }}/>
        </BarWrapper>
    </Wrapper>;
};

const Wrapper = styled.div`
    background-color: rgba(128, 128, 128, 0.15);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: var(--radius);
    padding: var(--padding);
`;

const BarWrapper = styled.div`
    border-radius: 4px;
    overflow: auto;
`;

const Bar = styled.div`
    width: var(--width);
    height: var(--height);
    border-radius: 4px 0 0 4px;
    background-color: ${COLORS.primary};
`;


export default ProgressBar;
