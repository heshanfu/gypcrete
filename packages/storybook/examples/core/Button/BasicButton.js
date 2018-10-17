import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '@ichef/gypcrete/src/Button';
import FlexRow from 'utils/FlexRow';

function BasicButtonExample() {
    return (
        <FlexRow>
            <Button
                bold
                basic="Black Button"
                aside="Default color"
                tag="Tag"
                icon="add"
                onClick={action('clicked')} />

            <Button
                color="blue"
                basic="Blue"
                aside="Variants"
                tag="Tag"
                icon="add" />

            <Button
                color="red"
                basic="Red"
                aside="Variants"
                tag="Tag"
                icon="add" />

            <Button
                color="white"
                basic="White"
                aside="Variants"
                tag="Tag"
                icon="add" />
        </FlexRow>
    );
}

export default BasicButtonExample;
