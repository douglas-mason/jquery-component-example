const mockData = [
  {
    id: 1,
    name: 'Eat More Tofu',
    tallyMarks: 5
  },
  {
    id: 2,
    name: 'Attend Jiu Jitsu',
    tallyMarks: 8
  }
];

function renderDashboard() {
  $('.tracker-container').html('');

  mockData.forEach(trackerData => {
    const component = new TrackerComponent(trackerData);
    $('.tracker-container').append(component.getHtml());
  });

  $('.main-section').hide();
  $('.dashboard').show();
}

function renderSummary(e) {
  const name = $(e.target).data('tracker-name');
  $('.main-section').hide();

  $('.tracker-info-container').html('');
  $('.tracker-info-container').append(`<h2>${name}</h2>`);
  $('.summary').show();
}

function renderUserProfile() {

  $('.main-section').hide();
  $('.user-profile').show();
}

class TrackerComponent {
  constructor(data) {
    this.trackerId = data.id;
    this.name = data.name;
    this.tallyMarks = data.tallyMarks;
  }

  getTallyBlocks() {
    const markBlocks = [];
    const template = `<li class="mark"></li>`;
    for (let i = 0; i < this.tallyMarks; i++) {
      markBlocks.push(template);
    }
    return markBlocks.join('');
  }

  getHtml() {
    const template = `
    <div>
      <h2>${this.name}</h2>
      <ul class="tally-marks">
        ${this.getTallyBlocks()}
      </ul>
      <div class="button-row">
        <button>Add Mark</button>
        <button data-tracker-name="${this.name}" class="summary-button">View Summary</button>
      </div>
    </div>
    `;
    return template;
  }
}

function setUpHandlers () {
  $('.dashboard-link').click(renderDashboard);
  $('.profile-link').click(renderUserProfile);

  $('.tracker-container').on('click', '.summary-button', renderSummary);
}

$('document').ready(() => {
  setUpHandlers();
  renderDashboard();
});