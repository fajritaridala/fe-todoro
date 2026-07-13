import React from "react";

import LockIcon from "./lock-icon";
import MailFilledIcon from "./mail-filled-icon";
import { AnimatedIconHandle, AnimatedIconProps } from "./types";
import UserIcon from "./user-icon";

// library for render the icon
const Icon_Registry: Record<
  string,
  React.ForwardRefExoticComponent<
    AnimatedIconProps & React.RefAttributes<AnimatedIconHandle>
  >
> = { LockIcon, MailFilledIcon, UserIcon } as const;

interface IconRendererProps extends AnimatedIconProps {
  icon: string;
}

// icon render component
const AnimatedIcon = React.forwardRef<AnimatedIconHandle, IconRendererProps>(
  (props, ref) => {
    const { icon } = props;
    const IconRenderer = Icon_Registry[icon];
    if (!IconRenderer) {
      console.warn(`Animated icon "${icon}" tidak ditemukan di IconMapping.`);
      return null;
    }

    return <IconRenderer ref={ref} {...props} />;
  }
);

AnimatedIcon.displayName = "AnimatedIcon";

export default AnimatedIcon;
