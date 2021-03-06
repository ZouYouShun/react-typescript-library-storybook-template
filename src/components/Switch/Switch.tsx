import React, { forwardRef, ReactNode } from 'react';

type UISwitchProps = {
  /** children render in the component */
  children?: ReactNode;
};

const UISwitch = forwardRef<any, UISwitchProps>(
  ({ children, ...rest }, ref) => {
    return (
      <div {...rest} ref={ref}>
        {children}
      </div>
    );
  },
);

UISwitch.defaultProps = {};

UISwitch.displayName = 'UISwitch';

export { UISwitch, UISwitchProps };
