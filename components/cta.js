import React from "react";
import Container from "./container";

const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-charcoalGrey px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-4xl font-bold font-elegant">
            Die Zukunft der Mode liegt in deinem Schrank.
          </h2>
          <p className="mt-2 font-medium text-opacity-90 lg:text-xl">
            Kostenlos im App Store Deiner Wahl.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://github.com/web3templates"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-charcoalGrey bg-roseQuartz rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Jetzt downloaden
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Cta;
