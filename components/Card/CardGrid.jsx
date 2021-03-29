import Card from "./Card";
import CardItem from "./CardItem";
import styles from "../../styles/Card.module.css";

export default function CardGrid() {
  return (
    <div className={styles.grid}>
      <Card title="JavaScript">
        <CardItem
          name="Codecademy"
          url="https://www.codecademy.com/learn/javascript"
        />
        <CardItem
          name="Eloquent JavaScript Book"
          url="https://eloquentjavascript.net"
        />
        <CardItem
          name="JavaScript Documentation"
          url="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction"
        />
      </Card>
      <Card title="Node.js">
        <CardItem name="NodeSchool" url="https://nodeschool.io" />
        <CardItem
          name="CodeSchool"
          url="https://www.codeschool.com/courses/real-time-web-with-node-js"
        />
        <CardItem
          name="Node.js Documentation"
          url="https://nodejs.org/en/docs/"
        />
      </Card>
      <Card title="Discord.js">
        <CardItem name="Discord.js Guide" url="https://discordjs.guide" />
        <CardItem
          name="Discord.js Documentation"
          url="https://discord.js.org/#/docs/main/stable/general/welcome"
        />
      </Card>
      <Card title="Don't Feel Bad!">
        <CardItem name="We all start somewhere, take your time and practice!"></CardItem>
      </Card>
    </div>
  );
}
