import { TrackerComponent } from "./tracker.component";
import { mockData } from "./mock-data";
export default function renderDashboard() {
  $(".tracker-container").html("");

  mockData.forEach(trackerData => {
    const component = new TrackerComponent(trackerData);
    $(".tracker-container").append(component.getHtml());
  });

  $(".main-section").hide();
  $(".dashboard").show();
}
