import React from 'react';
import { action } from '@storybook/addon-actions';

import SelectList from '@ichef/gypcrete-form/src/SelectList';
import Option from '@ichef/gypcrete-form/src/SelectOption';

function SingleControlled() {
    return (
        <SelectList values={['1']} onChange={action('change')}>
            <Option label="Option A" value="1" />
            <Option label="Option B" value="2" />
            <Option label="Option C" value="3" />
        </SelectList>
    );
}

export default SingleControlled;
