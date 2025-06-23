"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
const CalFloatingButton = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("floatingButton", {
        calLink: "kneoxt-45owzx/15min",
        config: { layout: "month_view" },
        buttonColor: "#ff6d02",
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
};

export default CalFloatingButton;
