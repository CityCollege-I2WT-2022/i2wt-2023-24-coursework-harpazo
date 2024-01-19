// chatzigiannis
// reis

// after 2 seconds delete .hidden and #hidden divs
setTimeout(() => {
  document.querySelectorAll('.hidden, #hidden').forEach(el => el.parentNode.removeChild(el));
}, 2000);
