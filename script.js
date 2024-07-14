function searchAmazon() {
    const query = document.getElementById('searchQuery').value;
    const openIn = document.getElementById('openIn').value;
    const url = `https://www.amazon.com/s?k=${encodeURIComponent(query)}&i=fashion-novelty&rh=p_6%3AATVPDKIKX0DER&s=date-desc-rank&hidden-keywords=Lightweight%2C+Classic+fit%2C+Double-needle+sleeve+and+bottom+hem+-Longsleeve+-Raglan+-Vneck+-Tanktop`;

    if (openIn === 'newTab') {
        window.open(url, '_blank');
    } else {
        window.location.href = url;
    }
}

function searchByFilter() {
    const query = document.getElementById('searchQuery').value;
    const product = document.getElementById('product').value;
    const sortBy = document.getElementById('sortBy').value;
    const marketplace = document.getElementById('marketplace').value;

    let url;

    switch(sortBy) {
        case 'newest':
            url = `https://www.amazon.com/s?k=${encodeURIComponent(query)}&i=fashion-novelty&rh=p_6%3AATVPDKIKX0DER&s=date-desc-rank&hidden-keywords=Lightweight%2C+Classic+fit%2C+Double-needle+sleeve+and+bottom+hem+-Longsleeve+-Raglan+-Vneck+-Tanktop`;
            break;
        case 'last30days':
            url = `https://www.amazon.com/s?k=${encodeURIComponent(query)}&i=fashion-novelty&rh=p_6%3AATVPDKIKX0DER%2Cp_n_date_first_available_absolute%3A15196852011&s=featured&hidden-keywords=Lightweight%2C+Classic+fit%2C+Double-needle+sleeve+and+bottom+hem+-Longsleeve+-Raglan+-Vneck+-Tanktop`;
            break;
        case 'featured':
            url = `https://www.amazon.com/s?k=${encodeURIComponent(query)}&i=fashion-novelty&rh=p_6%3AATVPDKIKX0DER&s=featured&hidden-keywords=Lightweight%2C+Classic+fit%2C+Double-needle+sleeve+and+bottom+hem+-Longsleeve+-Raglan+-Vneck+-Tanktop`;
            break;
    }

    window.open(url, '_blank');
}
