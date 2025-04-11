import { advercaseBold } from "@/app/font";
import { cn } from "@/utils/cn";
import ReserveButton from "./ReserveButton";

const ReserveSell = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h2
        className={cn(
          "md:text-center text-2xl w-full",
          advercaseBold.className
        )}
      >
        Launching <span className="text-black tracking-wider">May 2025</span>{" "}
        for <span className="text-black tracking-wider">$79</span>
      </h2>
      <p className="w-full md:w-3/4 mx-auto">
        Want to{" "}
        <span className="underline text-black">
          reserve your Snapkit now for $20?
        </span>
      </p>
      <div className="flex flex-col items-center justify-center gap-4 text-black">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="md:w-3/4 mx-autos">
            Reservations will hold your SnapKit and also be used towards
            purchase.
          </p>
          <div className="w-full md:w-3/4 mx-auto">
            Reserve now to also get:
          </div>
          <ul className="list-disc list-inside">
            <li>
              A <span className="text-white"> custom engraving</span>{" "}
              <span>on the SnapKit back</span>
            </li>
            <li>
              <span>Added</span> to our{" "}
              <span className="text-white">Early Backer Hall of Fame</span>
            </li>
            <li>
              A <span>limited</span>{" "}
              <span className="text-white">Founder Edition</span> SnapKit
            </li>
          </ul>
        </div>
        <ReserveButton buttonText="Reserve now" />
      </div>
    </div>
  );
};

export { ReserveSell };
