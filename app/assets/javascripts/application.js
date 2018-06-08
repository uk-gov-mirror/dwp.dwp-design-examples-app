/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Details/summary polyfill from frontend toolkit
  GOVUK.details.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
  initViewPortButtons()
})

function initViewPortButtons() {
  $(document).on('click', '.vp-resize', function (e) {
    e.preventDefault()
    var $this = $(this)
    var viewPortSize = '960px'
    if ($this.attr('id') === 'vp-resize-mobile') {
      viewPortSize = '400px'
    }
    return $('#example').css('width', viewPortSize)
  })
  appendResizeButtons()
}
function appendResizeButtons() {
  $('#example').after(`
    <div class="viewport-buttons">
      <a class="vp-resize" id="vp-resize-desktop" href="#">
        <span class="visually-hidden">Resize example for </span>
        Desktop
      </a> | 
      <a class="vp-resize" id="vp-resize-mobile" href="#">
        <span class="visually-hidden">Resize example for </span>
        Mobile
      </a>
    </div>
  `)
}
