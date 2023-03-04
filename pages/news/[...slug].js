import { useRouter } from "next/router";

function TestPage() {
  const router = useRouter();
  console.log(router);
  console.log(router.query);

  return <div>/news/Test Page</div>;
}

export default TestPage;
