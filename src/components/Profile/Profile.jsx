import {
  DivProfile,
  DivDescription,
  ImgAvatar,
  PName,
  PTag,
  PLocation,
  UlStats,
  SpanLable,
  SpanQuantity,
} from './Profile.styled';

export function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <DivProfile>
      <DivDescription>
        <ImgAvatar src={avatar} alt="User avatar" />
        <PName>{username}</PName>
        <PTag>@{tag}</PTag>
        <PLocation>{location}</PLocation>
      </DivDescription>

      <UlStats>
        <li>
          <SpanLable>Followers</SpanLable>
          <SpanQuantity>{followers}</SpanQuantity>
        </li>
        <li>
          <SpanLable>Views</SpanLable>
          <SpanQuantity>{views}</SpanQuantity>
        </li>
        <li>
          <SpanLable>Likes</SpanLable>
          <SpanQuantity>{likes}</SpanQuantity>
        </li>
      </UlStats>
    </DivProfile>
  );
}
