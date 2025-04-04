import { cn } from "@/utils/cn";
import { stickConfigurations } from "./data";
import { advercaseBold, hostGroteskRegular } from "../font";
import { HighlightedSpan } from "@/components/Text";

const StickConfig = ({
  config,
}: {
  config: (typeof stickConfigurations)[number];
}) => {
  return (
    <li key={config.name} className="">
      <strong
        className={cn(
          "sm:hidden block text-center sm:pt-4 py-4",
          advercaseBold.className
        )}
      >
        {config.name}
      </strong>
      <div className="flex flex-col items-center justify-center w-full gap-4 sm:pt-0">
        <div
          className="w-full h-36 md:h-24"
          style={{
            backgroundImage: `url(${config.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="px-4 sm:px-4 flex flex-col items-center justify-center gap-2 pb-4">
          <strong
            className={cn(
              "hidden sm:block text-center",
              advercaseBold.className
            )}
          >
            {config.name}
          </strong>
          <p>{config.description}</p>
        </div>
      </div>
    </li>
  );
};
const Versatile = () => {
  return (
    <div
      className={cn(
        "w-full max-w-screen-lg mx-auto z-20",
        hostGroteskRegular.className
      )}
      id="versatile"
    >
      <div className="flex flex-col items-center justify-center px-4 md:pb-16 mb-16 md:mt-0">
        <div className="flex flex-col md:items-center md:justify-center py-8 gap-4 px-4 md:px-8 xl:px-0">
          <h2 className={cn("text-3xl ", advercaseBold.className)}>
            The most{" "}
            <span className="text-(--accent) drop-shadow-[0_0_2px_var(--accent)]">
              versatile
            </span>{" "}
            phone stand
          </h2>
          <div>
            The LeVlog kit&apos;s articulated tripod stand allows for{" "}
            <HighlightedSpan>6 different</HighlightedSpan> use cases.
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4 w-full">
            {stickConfigurations.map((config) => (
              <StickConfig key={config.name} config={config} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Versatile;
