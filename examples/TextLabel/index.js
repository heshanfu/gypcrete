import React from 'react';
import { storiesOf } from '@kadira/storybook';

import BasicTextLabelExample from './BasicTextLabel';
import TextLabelWithStatusExample from './TextLabelWithStatus';
import TextLabelWithTextExample from './TextLabelWithText';

storiesOf('TextLabel', module)
    .addWithInfo('basic usage', () => <BasicTextLabelExample />)
    .addWithInfo('with status', () => <TextLabelWithStatusExample />)
    .addWithInfo('<Text> in child', () => <TextLabelWithTextExample />);
