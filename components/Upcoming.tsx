import { EventCard } from "@components";
import { events } from "@constants";

const Upcoming = () => {
  return (
    <>
      <h1 className="uppercase font-bold lg:text-[40px] text-center md:text-[30px] max-sm:text-[35px] my-10">
        upcoming events
      </h1>
      <div className="w-[80%] m-auto flex flex-col max-sm:w-full">
        {events.map((event, index) => (
          <EventCard
            key={index}
            image={event.image}
            startDate={event.startDate}
            endDate={event.endDate}
          />
        ))}
      </div>
    </>
  );
};

export default Upcoming;
