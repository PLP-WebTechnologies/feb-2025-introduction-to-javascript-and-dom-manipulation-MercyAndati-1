// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', function() {
    const dynamicText = document.getElementById('dynamic-text');
    dynamicText.textContent = 'The text has been changed using JavaScript!';
    dynamicText.style.color = '#007bff';
    dynamicText.style.fontStyle = 'italic';
});

// Modify CSS styles via JavaScript
const styleDemo = document.getElementById('style-demo');
const changeStyleBtn = document.getElementById('change-style-btn');
const resetStyleBtn = document.getElementById('reset-style-btn');

changeStyleBtn.addEventListener('click', function() {
    styleDemo.style.backgroundColor = '#ffcc00';
    styleDemo.style.color = '#333';
    styleDemo.style.border = '2px dotted #ff6600';
    styleDemo.style.padding = '20px';
    styleDemo.style.fontWeight = 'bold';
});

resetStyleBtn.addEventListener('click', function() {
    styleDemo.style = ''; // Reset all inline styles
});

// Item list functionality from original code
const items = [];
const nameInput = document.getElementById('name');
const itemInput = document.getElementById('item');
const listOutput = document.getElementById('list-output');

document.getElementById('add-item-btn').addEventListener('click', addItem);
document.getElementById('remove-item-btn').addEventListener('click', removeItem);
document.getElementById('show-list-btn').addEventListener('click', showList);
document.getElementById('clear-list-btn').addEventListener('click', clearList);

function addItem() {
    const item = itemInput.value.trim();
    if (item) {
        items.push(item);
        itemInput.value = '';
        updateListOutput(`Item added: ${item}`);
    }
}

function removeItem() {
    const item = itemInput.value.trim();
    const index = items.indexOf(item);
    if (index > -1) {
        items.splice(index, 1);
        updateListOutput(`Item removed: ${item}`);
    } else {
        updateListOutput(`Item not found: ${item}`, true);
    }
    itemInput.value = '';
}

function showList() {
    if (items.length === 0) {
        updateListOutput('The list is empty.');
        return;
    }
    
    const name = nameInput.value.trim() || 'User';
    let listHTML = `<h3>${name}'s List:</h3><ul>`;
    items.forEach(item => {
        listHTML += `<li>${item}</li>`;
    });
    listHTML += '</ul>';
    
    listOutput.innerHTML = listHTML;
}

function clearList() {
    items.length = 0;
    listOutput.innerHTML = '<p class="success">List cleared successfully!</p>';
}

function updateListOutput(message, isError = false) {
    listOutput.innerHTML = `<p class="${isError ? 'error' : 'success'}">${message}</p>`;
}