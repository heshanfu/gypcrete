import React from 'react';

import IconCheckbox from '@ichef/gypcrete/src/IconCheckbox';
import FlexRow from 'utils/FlexRow';

function BasicIconCheckboxExample() {
    return (
        <FlexRow>
            <IconCheckbox />

            <IconCheckbox indeterminate />
        </FlexRow>
    );
}

export default BasicIconCheckboxExample;
