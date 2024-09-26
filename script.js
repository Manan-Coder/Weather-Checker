const cityInput = document.getElementById("city-input")
const apikey = "61bb868f018b49489ce150517242509"
const srchButton = document.getElementById("srch-button")

async function getData(KEY, cityName) {
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${cityName}&aqi=yes`);
    return await promise.json();
}
srchButton.addEventListener('click', async () => {
    const input = cityInput.value;
    const result = await getData(apikey, input);
    document.getElementById('city').innerText = `${result.location.name}`;
    document.getElementById('state').innerText = `${result.location.region}`;
    document.getElementById('country').innerText = `${result.location.country}`;
    document.getElementById('temperature').innerText = `${result.location.temperatur_c}`;
    document.getElementById('temperature_f').innerText = `${result.current.temperatur_f}`;
    document.getElementById('localtime').innerText = `${result.current.localtime}`;
    document.getElementById('daynight').innerText = `${result.location.name}`;

    console.log(result.location.name)
})


