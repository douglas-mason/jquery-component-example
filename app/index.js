import renderDashboard from "./dashboard";
import renderUserProfile from "./profile";
import renderSummary from "./summary";

function setUpHandlers() {
  $(".dashboard-link").click(renderDashboard);
  $(".profile-link").click(renderUserProfile);

  $(".tracker-container").on("click", ".summary-button", renderSummary);
}

$("document").ready(() => {
  setUpHandlers();
  renderDashboard();
});
