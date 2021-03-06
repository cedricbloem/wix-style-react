/* eslint-disable */
import React from 'react';
import Box from 'wix-style-react/Box';

class NoFooterExample extends React.Component {
  render() {
    return (
      <Box>
        <CustomModalLayout
          title="Title"
          subtitle="Subtitle"
          footnote="footnote"
          onCloseButtonClick={() => {}}
        >
          <Text>
            If you leave now, changes you have made here won't be saved. Are you
            sure you want to leave?
          </Text>
        </CustomModalLayout>
      </Box>
    );
  }
}
