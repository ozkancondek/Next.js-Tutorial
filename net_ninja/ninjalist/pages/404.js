import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter(); // navigate function
  useEffect(() => {
    setTimeout(() => {
      //router.go(-1) go back tab
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>That page cannot be founf</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>{" "}
        or u will be redirected in 3 seconds
      </p>
    </div>
  );
};

export default NotFound;
