import MeetupList from "@/components/meetups/MeetupList";
import { useEffect, useState } from "react";

const DUMMY = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Canals_of_Amsterdam_-_Jordaan_area.jpg",
    address: "서울시 강남구",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Canals_of_Amsterdam_-_Jordaan_area.jpg",
    address: "서울시 광진구",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   setLoadedMeetups(DUMMY);
  // }, []);
  return <MeetupList meetups={props.meetups} />;
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY,
//     },
//     revalidate: 10,
//   };
// }

export async function getServerSideProps(context) {
  return {
    props: {
      meetups: DUMMY,
    },
  };
}

export default HomePage;
