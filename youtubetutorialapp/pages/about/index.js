import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <h2 className="greenColor">About Page </h2>
      <style jsx>{`
        .greenColor {
          color: green;
        }
        .redColor {
          color: red;
        }
      `}</style>
    </>
  );
};

export default About;
