getCodes();
const data = [];

function getCodes() {
    const url_base = 'https://www.aeromexico.com/cms/api/v1/airports?language=es&status=1';
    fetch(url_base).then( resolve => {
        return resolve.json();
    }).then(data => {
        data = data.airports;
        return data;
    });
}

export default getCodes;