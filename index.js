function showSidebar() {
    document.querySelector('.sidebar').style.display = 'flex';
}

function hideSidebar(event) {
    if (event) event.preventDefault();

    document.querySelector('.sidebar').style.display = 'none';
}
