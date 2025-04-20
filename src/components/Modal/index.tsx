import { PropsWithChildren } from "react";
import * as S from "./styles";
import { Icon, IconProps } from "@components/Icon";
import { Typography } from "@components/Typography";

export interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  titleIcon?: IconProps["iconName"];
  width?: string;
  height?: string;
  showCloseButton?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  titleIcon,
  width,
  height,
  children,
  showCloseButton = true
}: ModalProps) => {
  const hasTitle = Boolean(title);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const hideHeader = !hasTitle && !showCloseButton;
  return (
    <S.Overlay $isOpen={isOpen} onClick={handleOverlayClick}>
      <S.Content
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        $isOpen={isOpen}
        $width={width}
        $height={height}
        onClick={(e) => e.stopPropagation()}
      >
        {!hideHeader && (
          <S.Header $hasTitle={hasTitle}>
            <S.Title>
              {titleIcon && (
                <S.TitleIcon>
                  <Icon iconName={titleIcon} />
                </S.TitleIcon>
              )}
              {title && (
                <Typography
                  tag="h2"
                  fontSize="heading5"
                  fontWeight="regular"
                  fontFamily="secondary"
                  color="purple.text"
                >
                  {title}
                </Typography>
              )}
            </S.Title>
            {showCloseButton && (
              <S.CloseButton
                onClick={onClose}
                type="button"
                aria-label="Close modal"
              >
                <Icon iconName="FaTimes" iconColor="black" />
              </S.CloseButton>
            )}
          </S.Header>
        )}

        {children}
      </S.Content>
    </S.Overlay>
  );
};
