import React from 'react';
import RawText from './RawText';
import styles from './Caption.st.css';
import Ellipsis, { extractEllipsisProps } from '../common/Ellipsis';

const CaptionWithEllipsis = ({ className, caption, ...props }) => {
  const { ellipsisProps, componentProps } = extractEllipsisProps(props);

  return (
    <Ellipsis
      {...ellipsisProps}
      // TODO - with Stylable3 change to wrapperClassName
      wrapperClasses={{ className: styles[caption] }}
      render={({ ref, ellipsisClasses }) => (
        <RawText
          {...componentProps}
          size="medium"
          weight="bold"
          ref={ref}
          {...styles(
            'root',
            { caption },
            {
              className: ellipsisClasses(className),
            },
          )}
        />
      )}
    />
  );
};

CaptionWithEllipsis.displayName = 'Caption';

CaptionWithEllipsis.propTypes = {
  ...RawText.propTypes,
  ...Ellipsis.propTypes,
};

CaptionWithEllipsis.defaultProps = {
  ...RawText.defaultProps,
  ...Ellipsis.defaultProps,
};

export default CaptionWithEllipsis;
