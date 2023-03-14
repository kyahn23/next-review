import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

function DetailPage(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      description={props.meetupData.description}
      address={props.meetupData.address}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://kyahn:3j3IwKSAIYw6nj50@cluster0.7jehjja.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db("meetups");

  const meetupsCollection = db.collection("meetups");
  const idArr = await meetupsCollection.find({}, { _id: 1 }).toArray();
  const ids = idArr.map((id) => ({ params: { meetupId: id._id.toString() } }));
  client.close();

  return {
    fallback: false,
    paths: ids,
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;

  const client = await MongoClient.connect(
    "mongodb+srv://kyahn:3j3IwKSAIYw6nj50@cluster0.7jehjja.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db("meetups");

  const meetupsCollection = db.collection("meetups");
  const meetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  meetup._id = meetup._id.toString(); // _id 문자열 변환

  // _id 값을 id로 추가하기
  const { _id, ...abc } = meetup;
  const selectedMeetup = {
    ...abc,
    id: _id,
  };

  client.close();

  return {
    props: {
      meetupData: selectedMeetup,
    },
  };
}

export default DetailPage;
