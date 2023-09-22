import {
  Nav,
  Hero,
  Footer,
  Vision,
  RolesAndResponsibilities,
  Upcoming,
  SupportUs,
  GalleryCarousel,
} from "@components";

export default function Home() {
  return (
    <>
      <main className="relative">
        <Nav />
        <section className="">
          <Hero />
        </section>
        <section className="relative padding sections-gradient">
          <Vision />
        </section>
        <section className="bg-pale-blue padding">
          <RolesAndResponsibilities />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Upcoming />
        </section>
        <section className="padding 2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
          <GalleryCarousel />
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
