import { IconBaseProps } from "react-icons";
import * as FontAwesomeIcons from "react-icons/fa";

export interface IconProps extends IconBaseProps {
  iconName: keyof typeof FontAwesomeIcons;
  iconColor?: string;
}

export const Icon = ({ iconName, iconColor, ...rest }: IconProps) => {
  const Icon = FontAwesomeIcons[iconName];

  return <Icon {...rest} color={iconColor} />;
};
