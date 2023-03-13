import MeetupDetail from "@/components/meetups/MeetupDetail";

function DetailPage(props) {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/4/42/Canals_of_Amsterdam_-_Jordaan_area.jpg"
      title="A First Meetup"
      description="This is a first meetup!"
      address="서울시 강남구"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: { meetupId: "m1" } },
      { params: { meetupId: "m2" } },
      { params: { meetupId: "m3" } },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/42/Canals_of_Amsterdam_-_Jordaan_area.jpg",
        id: meetupId,
        title: "A First Meetup",
        description: "This is a first meetup!",
        address: "서울시 강남구",
      },
    },
  };
}

export default DetailPage;
