import React, { forwardRef, ReactNode } from 'react';

type __prefix____name__Props = {
  /** children render in the component */
  children?: ReactNode;
};

const __prefix____name__ = forwardRef<any, __prefix____name__Props>(
  ({ children, ...rest }, ref) => {
    return (
      <div {...rest} ref={ref}>
        {children}
      </div>
    );
  },
);

__prefix____name__.defaultProps = {};

__prefix____name__.displayName = '__prefix____name__';

export { __prefix____name__, __prefix____name__Props };
