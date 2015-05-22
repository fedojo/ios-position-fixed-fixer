var iOS = false,
    p = navigator.platform;

if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
    iOS = true;

    $('textarea, input, select').on('focus', mf_focus);
    $('textarea, input, select').on('blur', mf_blur);
}

function mf_focus() {
   yourSelector.hide();
}

function mf_blur() {
  yourSelector.show();
}
