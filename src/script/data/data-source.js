function dataSource() {
    const baseUrl = "https://disease.sh/";

    const getDataCovidGlobal = () => {
        fetch(`${baseUrl}v3/covid-19/all`)
            .then(response => response.json())
            .then(dataGlobal => renderDataGlobal(dataGlobal))
            .catch(error => showErrorMessage())
    };

    const getDataCovidCountry = () => {
        fetch(`${baseUrl}v3/covid-19/countries`)
            .then(response => response.json())
            .then(responseJson => {
                const dataSort = responseJson.map((country) => ({
                    names: country.country,
                    cases: country.cases,
                    death: country.deaths,
                    recover: country.recovered,
                    flag: country.countryInfo.flag,
                    toDayCases: country.todayCases,
                    toDayDeaths: country.todayDeaths,
                    toDayRecovered: country.todayRecovered,
                    active: country.active

                }));

                renderDataCovidCountries(dataSort);

            })
            .catch(error => showErrorMessage())
    }

    function sortData(prop) {
        return function (casesMax, casesMin) {
            if (casesMax[prop] < casesMin[prop]) {
                return 1;
            } else if (casesMax[prop] > casesMin[prop]) {
                return -1;
            }
            return 0;
        };
    }

    function showErrorMessage() {
        $(document).ready(function () {
            $('#myModal').modal('show');
        })
    };

    const renderDataGlobal = (data) => {
        $('#data-covid-global').html(`
        <div class="col-md-6 col-lg">
            <div class="card bg-confirmed">
                <div class="card-body">
                    <h5 class="card-title">Total Confirmed</h5>
                    <p class="card-text"><span class="bullet cases"></span><strong>${data.cases.toLocaleString()}</strong></p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg">
            <div class="card bg-death">
                <div class="card-body">
                    <h5 class="card-title">Total Deaths</h5>
                    <p class="card-text"><span class="bullet deaths"></span><strong>${data.deaths.toLocaleString()}</strong></p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg">
            <div class="card bg-recovered">
                <div class="card-body">
                    <h5 class="card-title">Total Recovered</h5>
                    <p class="card-text"> <span class="bullet recovered"></span><strong>${data.recovered.toLocaleString()}</strong></p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg">
            <div class="card bg-active">
                <div class="card-body">
                    <h5 class="card-title">Total Active</h5>
                    <p class="card-text"><span class="bullet active"></span><strong>${data.todayCases.toLocaleString()}</strong></p>
                </div>
            </div>
        </div>`);

        const [date, month, year] = (new Date(data.updated)).toLocaleString().split("/");

        $('#update').text(`Update ${date}/${month}/${year}`);
    };

    const renderDataCovidCountries = (dataSort) => {
        const listDataCovid = document.getElementById('table-data-body');
        dataSort.sort(sortData("cases"));
        let Nomor = 1;

        dataSort.forEach(data => {
            listDataCovid.innerHTML +=
                `<tr>
                    <td>${Nomor++}</td>
                    <td><img src="${data.flag}" style="width:2em"> ${data.names} </td>
                    <td>${data.active.toLocaleString()}</td>
                    <td>${data.cases.toLocaleString()}</td>
                    <td>${data.death.toLocaleString()}</td>
                    <td>${data.recover.toLocaleString()}</td>
                    <td>${data.toDayCases.toLocaleString()}</td>
                    <td>${data.toDayDeaths.toLocaleString()}</td>
                    <td>${data.toDayRecovered.toLocaleString()}</td>
                </tr>`;
        })

        $('#table-data').DataTable({
            "oLanguage": {
                "sLengthMenu": "Show _MENU_ Country",
                "sInfoEmpty": "Country Not Found",
                "sEmptyTable": "No data country available in table",
                "sLoadingRecords": "Please wait - loading...",
                "sInfoFiltered": " - filtering from _MAX_ records country",
                "sZeroRecords": "No records data country to display",
                "sInfo": "Total of _TOTAL_ Country to show (_START_ to _END_)"
            }
        });
    }

    getDataCovidGlobal();
    getDataCovidCountry();
}

export default dataSource;