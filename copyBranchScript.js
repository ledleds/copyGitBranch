(() => {
  const branchNameOuterDiv = document.querySelector("span[class='commit-ref css-truncate user-select-contain expandable head-ref']")
  const branchNameOuterSpan = branchNameOuterDiv.getElementsByClassName('css-truncate-target');
  const branchName = branchNameOuterSpan[0].textContent

  // Create new element
  const element = document.createElement('textarea');
  
  // Set value (string to be copied)
  element.value = branchName;

  // Set non-editable to avoid focus and move outside of view
  element.setAttribute('readonly', '');
  element.style = {position: 'absolute', left: '-9999px'};
  document.body.appendChild(element);

  // Select text inside element
  element.select();

  // Copy text to clipboard
  document.execCommand('copy');

  // Remove temporary element
  document.body.removeChild(element);

  return branchName;
})();