import Image from "next/image";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={props.image} width={500} height={500} alt={props.title} />
          {/* <img src={props.image} alt={props.title} /> */}
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
