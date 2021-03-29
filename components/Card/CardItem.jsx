import ExternalLink from "../Utils/ExternalLink";

export default function CardItem({ url, name }) {
  return (
    <>
      <li>
        <ExternalLink link={url}>{name}</ExternalLink>
      </li>
    </>
  );
}
