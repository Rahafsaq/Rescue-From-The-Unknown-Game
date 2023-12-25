import React from "react";

function ExplainGame() {
  return (
    <>
      {/* start section */}
      <section className="min-h-screen w-scree">
        {/* image Background */}
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center h-screen max-sm:overflow-auto max-md:overflow-auto"
          style={{
            backgroundImage: `url()`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
          }}
        >
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed max-sm:overflow-auto max-md:overflow-auto"
            style={{ backgroundColor: `rgba(0, 0, 0, 0.3)` }}
          >
            {/* conentent */}
          </div>
        </div>

        {/* End section */}
      </section>
    </>
  );
}

export default ExplainGame;
