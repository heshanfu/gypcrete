import React from 'react';
import classNames from 'classnames';
import './styles/Tag.scss';

import icBEM from './utils/icBEM';
import prefixClass from './utils/prefixClass';

const COMPONENT_NAME = prefixClass('tag');
const ROOT_BEM = icBEM(COMPONENT_NAME);

function Tag({ className, children }) {
    const rootClass = classNames(`${ROOT_BEM.toString()}`, className);

    return (
        <span className={rootClass}>
            <span>{children}</span>
        </span>
    );
}

export default Tag;
