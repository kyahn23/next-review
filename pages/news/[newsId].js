const { useRouter } = require("next/router");

function DetailPage(props) {
  //   const router = useRouter();

  //   const id = router.query.newsId;

  return (
    <div>
      <h1>Detail Page</h1>
      <span>{"asdf"}</span>
    </div>
  );
}

export async function getServerSideProps(context) {
  const newsId = context.query.newsId;
  // postId 값을 사용하여 서버에서 데이터를 가져옴
  // const data = await getData(postId);
  console.log(context);
  console.log(newsId);
  return {
    props: { postId: null },
  };
}

export default DetailPage;
