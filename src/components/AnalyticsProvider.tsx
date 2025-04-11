"use client";

import * as amplitude from "@amplitude/analytics-browser";
import { useEffect } from "react";

export const AnalyticsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    try {
      amplitude.init("ddb3a1ef5185bc42722e9e29650fd38d", {
        optOut: false,
        defaultTracking: {
          pageViews: true,
          sessions: true,
          formInteractions: true,
        },
      });
    } catch (error) {
      console.warn("Amplitude initialization error:", error);
    }
  }, []);

  return <>{children}</>;
};

export { amplitude };
