import React from 'react';

import EditableText from '@ichef/gypcrete/src/EditableText';
import DebugBox from 'utils/DebugBox';

function Alignments() {
    return (
        <div>
            <DebugBox>
                <EditableText value="left-aligned" />
            </DebugBox>

            <DebugBox>
                <EditableText
                    align="center"
                    value="center-aligned"
                />
            </DebugBox>

            <DebugBox>
                <EditableText
                    align="right"
                    value="right-aligned"
                />
            </DebugBox>
        </div>
    );
}

export default Alignments;
