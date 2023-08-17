//!=================================================================================================
"use strict";
const inputSearch = document.getElementById("input");
const countryName = document.getElementById("country");
const imageDegree = document.getElementById("imageDegree");
const typeOfWeather = document.getElementById("clouds");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("persantage");
const spead = document.getElementById("spead");
const windDirection = document.getElementById("widDir");
//?================================================================
const nextDayImg = document.getElementById("netDayImg");
const nextDayDegreeMax = document.getElementById("netDayDegreeMax");
const nextDayDegreeMin = document.getElementById("netDayDegreeMin");
const nextDayType = document.getElementById("netDayType");
//?================================================================
const nextDayImg2 = document.getElementById("netDayImg2");
const nextDayDegreeMax2 = document.getElementById("netDayDegreeMax2");
const nextDayDegreeMin2 = document.getElementById("netDayDegreeMin2");
const nextDayType2 = document.getElementById("netDayType2");
//?================================================================
const nextDayImg3 = document.getElementById("netDayImg3");
const nextDayDegreeMax3 = document.getElementById("netDayDegreeMax3");
const nextDayDegreeMin3 = document.getElementById("netDayDegreeMin3");
const nextDayType3 = document.getElementById("netDayType3");
//!================================================================
const day = document.getElementById("day");
const month = document.getElementById("month");
const daysNumber = document.getElementById("dayNumber");
const nextDay = document.getElementById("nextDay");
const nextNextDay = document.getElementById("nextNextDay");
const nex3Day = document.getElementById("next3Day");
const daysNumber2 = document.getElementById("daysNumber2");
const daysNumber3 = document.getElementById("daysNumber3");
const daysNumber4 = document.getElementById("daysNumber4");
//todo================================================================
async function getData(cityName) {
  let apiKey = "33860193597f4687937202244231208";
  let numberOfDays = "4";
  let data = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=${numberOfDays}`
  );
  let finalData = await data.json();
  if (!finalData.error) {
    countryName.innerHTML = `${finalData.location.name}`;
    imageDegree.setAttribute("src", `${finalData.current.condition.icon}`);
    typeOfWeather.innerHTML = `${finalData.current.condition.text}`;
    temperature.innerHTML = `${finalData.current.temp_c}`;
    spead.innerHTML = `${finalData.current.wind_kph}km/h`;
    humidity.innerHTML = `${finalData.current.humidity}%`;
    windDirection.innerHTML = `${finalData.current.wind_dir}`;
    //---------------------------------------------------------------
    nextDayImg.setAttribute(
      "src",
      `${finalData.forecast.forecastday[1].day.condition.icon}`
    );
    nextDayDegreeMax.innerHTML = `${finalData.forecast.forecastday[1].day.maxtemp_c}`;
    nextDayDegreeMin.innerHTML = `${finalData.forecast.forecastday[1].day.mintemp_c}`;
    nextDayType.innerHTML = `${finalData.forecast.forecastday[1].day.condition.text}`;
    //---------------------------------------------------------------
    nextDayImg2.setAttribute(
      "src",
      `${finalData.forecast.forecastday[2].day.condition.icon}`
    );
    nextDayDegreeMax2.innerHTML = `${finalData.forecast.forecastday[2].day.maxtemp_c}`;
    nextDayDegreeMin2.innerHTML = `${finalData.forecast.forecastday[2].day.mintemp_c}`;
    nextDayType2.innerHTML = `${finalData.forecast.forecastday[2].day.condition.text}`;
    //---------------------------------------------------------------
    nextDayImg3.setAttribute(
      "src",
      `${finalData.forecast.forecastday[3].day.condition.icon}`
    );
    nextDayDegreeMax3.innerHTML = `${finalData.forecast.forecastday[3].day.maxtemp_c}`;
    nextDayDegreeMin3.innerHTML = `${finalData.forecast.forecastday[3].day.mintemp_c}`;
    nextDayType3.innerHTML = `${finalData.forecast.forecastday[3].day.condition.text}`;
    //---------------------------------------------------------------
    day.innerHTML = `${daysName}`;
    daysNumber.innerHTML = `${dayNumber}`;
    month.innerHTML = `${monthName}`;
    // ---------------------------------------------------------------
    nextDay.innerHTML = `${finalData.forecast.forecastday[1].date}`;
    nextNextDay.innerHTML = `${finalData.forecast.forecastday[2].date}`;
    nex3Day.innerHTML = `${finalData.forecast.forecastday[3].date}`;
    //---------------------------------------------------------------
  }
}

inputSearch.addEventListener("input", function () {
  let inputSearchValue = inputSearch.value;
  getData(inputSearchValue);
});
//*==============================Dates==============================

const dates = new Date();
const daysName = dates.toLocaleDateString("en-US", { weekday: "long" });
const monthName = dates.toLocaleDateString("en-US", { month: "long" });
const dayNumber = dates.toLocaleDateString("en-US", { day: "numeric" });
//*==============================Error==============================

//todo===============================Loading-page=================================================
setTimeout(function () {
  let load = document.getElementById("loading-page");
  load.classList.add("loading--hidden");
}, 2000);
setTimeout(function () {
  getData("egypt");
}, 1000);
