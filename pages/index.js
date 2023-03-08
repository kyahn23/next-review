import Layout from "@/components/layout/Layout";
import MeetupList from "@/components/meetups/MeetupList";

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

function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={DUMMY} />
    </Layout>
  );
}

export default HomePage;
