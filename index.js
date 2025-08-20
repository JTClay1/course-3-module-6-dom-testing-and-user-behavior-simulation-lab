// Add element with given id and text content
function addElementToDOM(id, text) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('div');
    el.id = id;
    document.body.appendChild(el);
  }
  el.textContent = text;
  return el;
}

// Remove element by id
function removeElementFromDOM(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

// Simulate a "click" action by updating target element
function simulateClick(id, text) {
  return addElementToDOM(id, text);
}

// Handle form submission and update target / show error
function handleFormSubmit(formId, targetId) {
  const form = document.getElementById(formId);
  if (!form) return;

  const input = form.querySelector('input');
  const value = (input?.value || '').trim();
  const errorEl = document.getElementById('error-message');

  if (!value) {
    if (errorEl) {
      errorEl.textContent = 'Input cannot be empty';
      errorEl.classList.remove('hidden');
    }
    return;
  }

  // hide error if any
  if (errorEl) {
    errorEl.textContent = '';
    errorEl.classList.add('hidden');
  }

  const target = addElementToDOM(targetId, '');
  target.textContent = value;
}

// Expose for Jest
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};