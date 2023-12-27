import React from "react";

function FindChar() {
  return (
    <>
      {/* start section */}
      <section className="min-h-screen w-screen">
        {/* image Background */}
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center h-screen max-sm:overflow-auto max-md:overflow-auto"
          style={{
            backgroundImage: `url(${Map360})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
            // filter: "blur(3px)",
          }}
        >
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed max-sm:overflow-auto max-md:overflow-auto"
            style={{ backgroundColor: `rgba(0, 0, 0, 0.6)` }}
          >
            {/* Start Find the charachter */}
            {/* End Find the charachter */}
          </div>
        </div>
      </section>
    </>
  );
}

export default FindChar;
