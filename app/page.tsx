import {
  Nav,
  Hero,
  Footer,
  Vision,
  RolesAndResponsibilities,
  Upcoming,
  SupportUs,
} from "@components";

export default function Home() {
  return (
    <>
      <main className="relative">
        <Nav />
        <section className="">
          <Hero />
        </section>
        <section className="relative padding sections-gradient skew">
          <Vision />
        </section>
        <section className="bg-pale-blue padding">
          <RolesAndResponsibilities />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Upcoming />
        </section>
        <section className="padding">
          <SupportUs />
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </>
  );
}
