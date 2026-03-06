document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('#search-form');
    const searchInput = document.querySelector('#search-input');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        
        if (query) {
            console.log(`Searching recipes for: ${query}`);
            searchInput.value = '';
        }
    });
});