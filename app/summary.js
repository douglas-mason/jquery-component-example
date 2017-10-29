export default function renderSummary(e) {
  const name = $(e.target).data('tracker-name');
  $('.main-section').hide();

  $('.tracker-info-container').html('');
  $('.tracker-info-container').append(`<h2>${name}</h2>`);
  $('.summary').show();
}