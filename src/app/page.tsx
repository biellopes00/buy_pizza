import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-700 max-w-md mx-auto mt-4 felx felx-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            facere sed rem provident, alias veniam nesciunt saepe animi quo
            facilis iure assumenda amet. Quos laboriosam sit,ratione ab beatae
            ea.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio
            numquam aspernatur error impedit quisquam reiciendis magni? Dolore
            voluptatum neque quos! Tenetur accusamus neque commodi laborum sed
            possimus repudiandae quisquam.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Dont't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a className="text-4xl text-gray-700" href="tel:+5581123123123">
            +55 81 123 123 123
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-800">
        &copy; 2024 All rights reserved
      </footer>
    </>
  );
}
