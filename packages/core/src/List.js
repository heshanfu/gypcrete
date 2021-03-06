import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles/List.scss';

import prefixClass from './utils/prefixClass';
import icBEM from './utils/icBEM';

import Section from './Section';
import ListSpacingContext from './contexts/listSpacing';

export const COMPONENT_NAME = prefixClass('list');
const ROOT_BEM = icBEM(COMPONENT_NAME);
export const BEM = {
    root: ROOT_BEM,
    body: ROOT_BEM.element('body'),
};

const NORMAL = 'normal';
const SETTING = 'setting'; // #TODO: design deprecated
const BUTTON = 'button';
const LIST_VARIANTS = [NORMAL, SETTING, BUTTON];

export const TYPE_SYMBOL = Symbol('List');

function List({
    variant,
    // <Section> props
    title,
    desc,
    titleSize,
    // React props
    className,
    children,
    ...otherProps
}) {
    const bemClass = BEM.root.modifier(variant);
    const rootClassName = classNames(bemClass.toString(), className);

    return (
        <ListSpacingContext.Consumer>
            {spacing => (
                <Section
                    className={rootClassName}
                    title={title}
                    titleSize={titleSize}
                    desc={desc}
                    bodySpacing={false}
                    verticalSpacing={spacing}
                    {...otherProps}>
                    <ul className={BEM.body.toString()}>
                        {children}
                    </ul>
                </Section>
            )}
        </ListSpacingContext.Consumer>
    );
}

List.propTypes = {
    variant: PropTypes.oneOf(Object.values(LIST_VARIANTS)),
    /** `<Section>` prop */
    title: PropTypes.string,
    /** `<Section>` prop */
    desc: PropTypes.node,
    /** `<Section>` prop */
    titleSize: PropTypes.string,
};

List.defaultProps = {
    variant: NORMAL,
    title: undefined,
    desc: undefined,
    titleSize: undefined,
};

// For `<ListRow>` to check if `nestedList` is a `<List>.
// Ref for this symbol approach: https://github.com/iCHEF/gypcrete/pull/157
List.typeSymbol = TYPE_SYMBOL;

export default List;
