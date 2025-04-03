"use client";

import * as amplitude from "@amplitude/analytics-browser";

amplitude.init("ddb3a1ef5185bc42722e9e29650fd38d", { autocapture: true });

export const AnalyticsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <>{children}</>;
};

export { amplitude };
