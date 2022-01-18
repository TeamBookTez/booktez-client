import {
  LandingFive,
  LandingFooter,
  LandingFour,
  LandingHeader,
  LandingOne,
  LandingThree,
  LandingTwo,
} from "../components/landing";

export default function Landing() {
  return (
    <>
      <LandingHeader />
      <main>
        <LandingOne />
        <LandingTwo />
        <LandingThree />
        <LandingFour />
        <LandingFive />
      </main>
      <LandingFooter />
    </>
  );
}
