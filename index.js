try {
    const response = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    const data = await response.json()
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    document.getElementById("author").textContent = `By: ${data.user.name}`
} catch (error) {
    // Use a default background image/author
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
    )`
	document.getElementById("author").textContent = `By: Dodi Achmad`
}

try {
    const response = await fetch("https://stoic.tekloon.net/stoic-quote")
    const data = await response.json()
    document.getElementById("quote").innerHTML = `
        <h2 class="quote-author">${data.author}</h2>
        <p class="quote-text">${data.quote}</p>`
} catch (error) {
    console.error(error)
}

try {
    const cryptoResponse = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    if (!cryptoResponse.ok) {
        throw Error("Something went wrong")
    }
    const cryptoData = await cryptoResponse.json()
    document.getElementById("crypto-top").innerHTML = `
        <img src=${cryptoData.image.small} />
        <span>${cryptoData.name}</span>
    `
    document.getElementById("crypto").innerHTML += `
        <p>🎯: $${cryptoData.market_data.current_price.usd}</p>
        <p>👆: $${cryptoData.market_data.high_24h.usd}</p>
        <p>👇: $${cryptoData.market_data.low_24h.usd}</p>
    `
} catch (error) {
    console.error(error)
}

function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

setInterval(getCurrentTime, 1000)

// navigator.geolocation.getCurrentPosition(async position => {
//     try {
//         const res = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
//         if (!res.ok) {
//             throw Error("Weather data not available")
//         }
//         const locationData = await res.json()
//         const iconUrl = `http://openweathermap.org/img/wn/${locationData.weather[0].icon}@2x.png`
//         document.getElementById("weather").innerHTML = `
//             <img src=${iconUrl} />
//             <p class="weather-temp">${Math.round(locationData.main.temp)}º</p>
//             <p class="weather-city">${locationData.name}</p>
//         `
//     } catch (error) {
//         console.error(error)
//     }
// })

// I don't want to allow Google to always track my location, so I hard coded my coordinates

try {
    const weatherResponse = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=59.937500&lon=30.308611&units=metric`)
    if (!weatherResponse.ok) {
        throw Error("Weather data not available")
    }
    const weatherData = await weatherResponse.json()
    const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    document.getElementById("weather").innerHTML = `
        <img src=${iconUrl} />
        <p class="weather-temp">${Math.round(weatherData.main.temp)}º</p>
        <p class="weather-city">${weatherData.name}</p>
    `
} catch (error) {
    console.error(error)
}
