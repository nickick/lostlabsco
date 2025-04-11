"use client";

import ReserveButton from "@/components/ReserveButton";
import { cn } from "@/utils/cn";
import { advercaseBold, advercaseRegular } from "../font";
import NavbarFooter from "@/components/Layouts/NavbarFooter";

const HighlightText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold text-(--accent) drop-shadow-[0_0_1px_var(--accent)] text-sm",
        advercaseRegular.className,
        className
      )}
    >
      {children}
    </span>
  );
};

export default function HallOfFame() {
  return (
    <NavbarFooter theme="dark">
      <div className="flex flex-col items-center justify-center h-screen gap-8 max-w-xl mx-auto relative z-20">
        <div className="flex flex-col items-center justify-center gap-8 border-b pb-12">
          <h1 className={cn(advercaseBold.className, "text-4xl")}>
            Lost Labs{" "}
            <span className="text-(--accent) drop-shadow-[0_0_2px_var(--accent)]">
              Hall Of Fame
            </span>
          </h1>
          <p className="text-center text-lg">
            We&apos;re proud to showcase the first 200 customers who supported
            Lost Labs.
          </p>
          <p className="text-center text-3xl">Coming soon!</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 px-2">
          <p>Want to join our Hall of Fame?</p>
          <p>Reserve with $20 for these perks:</p>
          <div className="flex">
            <div className="flex flex-col items-center justify-center gap-2">
              <div>Perk</div>
              <ul className="list-disc list-inside flex flex-col">
                <li>
                  <HighlightText>Personalized engraving</HighlightText> on the
                  back
                </li>
                <li>
                  Shoutout on our <HighlightText>Hall of Fame</HighlightText>
                </li>
                <li>
                  A limited <HighlightText>Founders Edition</HighlightText>{" "}
                  engraving
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div>Qty left</div>
              <ul>
                <li>
                  <HighlightText>20</HighlightText>/20
                </li>
                <li>
                  <HighlightText>200</HighlightText>/200
                </li>
                <li>
                  <HighlightText>2,000</HighlightText>/2,000
                </li>
              </ul>
            </div>
          </div>
          <ReserveButton buttonText="Reserve Now" />
        </div>
      </div>
    </NavbarFooter>
  );
}
