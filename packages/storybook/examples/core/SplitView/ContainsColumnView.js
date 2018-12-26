import React from 'react';

import SplitView from '@ichef/gypcrete/src/SplitView';
import SplitViewColumn from '@ichef/gypcrete/src/SplitViewColumn';

import DebugBox from 'utils/DebugBox';
import ColoredBox from 'utils/ColoredBox';

import DemoColumnView from './DemoColumnView';

function ContainsColumnView() {
    return (
        <DebugBox width="40rem" height="24rem">
            <SplitView>
                <SplitViewColumn>
                    <DemoColumnView>
                        <ColoredBox
                            width="100%"
                            height="30rem"
                            color="rgb(255, 235, 235)">
                            Narrow Column
                        </ColoredBox>
                    </DemoColumnView>
                </SplitViewColumn>

                <SplitViewColumn wide>
                    <DemoColumnView>
                        <ColoredBox
                            width="100%"
                            height="30rem"
                            color="rgb(235, 245, 255)">
                            Narrow Column
                        </ColoredBox>
                    </DemoColumnView>
                </SplitViewColumn>
            </SplitView>
        </DebugBox>
    );
}

export default ContainsColumnView;