import React from 'react';
import PropTypes from 'prop-types';
import style from '../Table.st.css';
import Box from '../../Box';

/** TableSubtoolbar */
export const TableSubToolbar = ({ dataHook, children }) => {
  return (
    <Box
      className={style.tableSubToolbar}
      paddingTop={2}
      paddingBottom={2}
      paddingLeft={5}
      paddingRight={5}
      dataHook={dataHook}
    >
      {children}
    </Box>
  );
};

TableSubToolbar.displayName = 'Table.SubToolbar';

TableSubToolbar.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** Any element to be rendered inside */
  children: PropTypes.node,
};
