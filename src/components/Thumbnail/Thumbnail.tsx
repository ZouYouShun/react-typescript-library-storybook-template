import React, { FunctionComponent, HTMLAttributes } from 'react';

type RcThumbnailProps = {
  /** is that disabled */
  disabled?: boolean;
  /** text color */
  color?: 'red' | 'blue';
  /** background color */
  background?: 'yellow' | 'green';
} & HTMLAttributes<HTMLDivElement>;

const RcThumbnail: FunctionComponent<RcThumbnailProps> = ({
  color,
  background,
  children,
  disabled,
  ...rest
}) => {
  const style = !disabled ? { color, background } : { color: 'grey' };

  return (
    <div style={style} {...rest}>
      {children}
    </div>
  );
};

RcThumbnail.defaultProps = {};

RcThumbnail.displayName = 'RcThumbnail';

export { RcThumbnail, RcThumbnailProps };
