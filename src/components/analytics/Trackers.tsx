"use client";

import { useEffect } from "react";
import { amplitude } from "../AnalyticsProvider";
import { useWindowSize } from "usehooks-ts";

export const Trackers = () => {
  useEffect(() => {
    amplitude.track("Page Viewed", {
      path: window.location.pathname,
    });
  }, []);
  const { width } = useWindowSize();

  useEffect(() => {
    amplitude.track("Window Size", {
      width,
    });
  }, [width]);

  return null;
};
