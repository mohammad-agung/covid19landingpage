import dataSource from "../data/data-source";

function main() {
    $('#favicon').attr('href', `${window.location.href}src/assets/images/logoimg.png`)
    dataSource();
}

export default main;