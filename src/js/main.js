const refs = {
    invoiceContainer: document.querySelector('.js-invoice-container'),

};

fetch('http://localhost:3000/jsonarray')
    .then(response => {
    return response.json()
    })
    .then(invoices => {
            const invoicesCards = invoices.map(({ date_created, number, date_supplied, comment }) => {
            return `
            <ul class="list">
                <li class="list-item">${date_created}</li>
                <li class="list-item">${number}</li>
                <li class="list-item">${date_supplied}</li>
                <li class="list-item">${comment}</li>
            </ul>`;
        }).join('');
        refs.invoiceContainer.insertAdjacentHTML('beforeend', invoicesCards);
        invoices = ``;
    })