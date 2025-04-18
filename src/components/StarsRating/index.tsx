import * as S from "./styles";
import { Icon } from "@components/Icon";

interface StarRatingProps {
  rating: number;
}

export const StarRating = ({ rating }: StarRatingProps) => {
  const totalStars = 5;

  return (
    <S.StarsWrapper>
      {[...Array(totalStars)].map((_, index) => (
        <S.Star key={index} $filled={index < Math.round(rating)}>
          <Icon iconName="FaStar" size={16} />
        </S.Star>
      ))}
    </S.StarsWrapper>
  );
};
