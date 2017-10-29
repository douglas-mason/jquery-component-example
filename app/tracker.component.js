export class TrackerComponent {
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