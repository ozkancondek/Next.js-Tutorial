import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <h2 className="greenColor bigText">About Page </h2>
      <style jsx>{`
        .greenColor {
          color: green;
        }
        .redColor {
          color: red;
        }
        .bigText {
          font-size: 100px;
        }
      `}</style>
    </>
  );
};

export default About;
