import Hero from "../sections/Hero";
import About from "../sections/About"
import Account from "../sections/Account";
import Cards from "../sections/Cards";
import Partners from "../sections/Partners";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Account />
      <Cards />
      <Partners />
    </>
  );
}