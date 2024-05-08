import { DateTime } from "luxon";

export const Footer = () => {
  const year = DateTime.local().year;
  return (
    <footer className="fixed w-full bottom-0">
      <div className="container mx-auto">
        <div className="flex justify-center w-full">
          <p className="text-white leading-4 text-nowrap text-xl py-4">
            &copy; {year} Aaron Smyth
          </p>
        </div>
      </div>
    </footer>
  );
};
