import Image from "next/image";
import { Fragment } from "react";

import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <Image
        src={props.image}
        width={500}
        height={500}
        alt={props.title}
        style={{
          width: "100%",
          height: "auto",
        }}
        priority
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;
