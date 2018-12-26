import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles/ColumnView.scss';

import prefixClass from './utils/prefixClass';
import icBEM from './utils/icBEM';

export const COMPONENT_NAME = prefixClass('column-view');
const ROOT_BEM = icBEM(COMPONENT_NAME);
export const BEM = {
    root: ROOT_BEM,
    header: ROOT_BEM.element('header'),
    body: ROOT_BEM.element('body'),
    footer: ROOT_BEM.element('footer'),
};

export function ColumnPart({ children, ...otherProps }) {
    if (!children) {
        return null;
    }

    return <div {...otherProps}>{children}</div>;
}

function ColumnView({
    header,
    footer,
    bottomPadding,
    // React props
    className,
    children,
    ...wrapperProps
}) {
    const rootClassName = classNames(BEM.root.toString(), className);
    const bodyStyle = {};

    if (bottomPadding) {
        bodyStyle.paddingBottom = bottomPadding;
    }

    return (
        <div className={rootClassName} {...wrapperProps}>
            <ColumnPart className={BEM.header.toString()}>
                {header}
            </ColumnPart>

            <div className={BEM.body.toString()} style={bodyStyle}>
                {children}
            </div>

            <ColumnPart className={BEM.footer.toString()}>
                {footer}
            </ColumnPart>
        </div>
    );
}

ColumnView.propTypes = {
    header: PropTypes.node,
    footer: PropTypes.node,
    bottomPadding: PropTypes.string,
};

ColumnView.defaultProps = {
    header: undefined,
    footer: undefined,
    bottomPadding: undefined,
};

export default ColumnView;