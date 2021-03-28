export default function CardItem({ url, name }) {
  return (
    <>
      <li>
        <a href={url}>{name}</a>
      </li>
    </>
  );
}
