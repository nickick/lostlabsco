"use client";

import { cn } from "@/utils/cn";
import { advercaseRegular } from "@/app/font";
import { amplitude } from "./AnalyticsProvider";

const shopifyCheckoutLink =
  "https://lostlabs.myshopify.com/cart/45043440255170:1?channel=buy_button";

const ReserveButton = ({ buttonText = "Reserve" }: { buttonText?: string }) => {
  return (
    <button
      className={cn(
        "bg-accent drop-shadow-md hover:light:drop-shadow-xl light:bg-white light:text-black dark:text-black px-4 py-2 rounded-md cursor-pointer hover:light:bg-background-mid hover:bg-accent/90 hover:drop-shadow-[0_0_4px_var(--accent)] transition-colors duration-300",
        advercaseRegular.className
      )}
      id="product-component-1744009081884"
      onClick={() => {
        amplitude.track("Reserve Button Clicked", {
          path: window.location.pathname,
          query: window.location.search,
        });
        window.open(shopifyCheckoutLink, "_blank");
      }}
    >
      {buttonText}
    </button>
  );
};

export default ReserveButton;
