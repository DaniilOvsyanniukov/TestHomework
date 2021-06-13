const refs = {
    number: document.querySelector('.number'),
    date_created: document.querySelector('.invoice-date'),
    date_supplied: document.querySelector('.supply-date'),
    comment: document.querySelector('.textarea-comment'),
    submitButton: document.querySelector('.button'),
}

const url = 'http://localhost:3000/jsonarray';

let data = new Object();
    data.number = 0;
    data.date_created = "";
    data.date_supplied = "";
    data.comment = "";

refs.number.addEventListener("change", function () {
    data.number = refs.number.value;
});

refs.date_created.addEventListener("change", function () {
    data.date_created = refs.date_created.value;

});

refs.date_supplied.addEventListener("change", function () {
    data.date_supplied = refs.date_supplied.value;
});

refs.comment.addEventListener("change", function () {
    data.comment = refs.comment.value;
});


function validation() {

    if (refs.number.value.length < 3) {
        alert('please fill in the form');
    } else {
        if (!refs.date_created.value == 0 &&
            !refs.date_supplied.value == 0) {
            postCard()
        }
        else {
            alert('please fill in the form');
        }
    }
};

function postCard() {
    try {
        const response = fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = response.json();
        console.log('Успех:', JSON.stringify(json));
    } catch (error) {
        console.error('Ошибка:', error);
    }
    window.location.href = "./index.html";
}

refs.submitButton.addEventListener('click', validation)
         


