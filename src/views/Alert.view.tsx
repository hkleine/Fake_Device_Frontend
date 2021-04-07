import React from "react";
import { MenuHeading } from "../components";
import {DashboardLayout} from "../layouts"

export function AlertView() {
  return (
    <div>
      <DashboardLayout>
        <div className="flex flex-col">
        <MenuHeading>Alerts</MenuHeading>
        </div>
      </DashboardLayout>
    </div>
  );
}