import React from "react";

const PageNotFound = () => {
  return (
    <main className="flex flex-col">
      <div
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/404.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="flex flex-col absolute inset-0 items-center justify-center gap-2">
          <h1 className="text-white text-4xl md:text-6xl font-bold">Page Not Found</h1>
          <p className="text-white text-sm">
            Oops! You tried to access a page outside our website scope. Please
            try again later.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
