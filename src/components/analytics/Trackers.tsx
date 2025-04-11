"use client";

import { useEffect } from "react";
import { amplitude } from "../AnalyticsProvider";
import { useWindowSize } from "usehooks-ts";

export const Trackers = () => {
  useEffect(() => {
    try {
      amplitude.track("Page Viewed", {
        path: window.location.pathname,
      });
    } catch (error) {
      console.warn("Failed to track page view:", error);
    }
  }, []);

  const { width } = useWindowSize();

  useEffect(() => {
    try {
      amplitude.track("Window Size", {
        width,
      });
    } catch (error) {
      console.warn("Failed to track window size:", error);
    }
  }, [width]);

  return null;
};
