document.addEventListener("DOMContentLoaded", function () {
    
    //To determine current day 
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; //array of weekdays
    const currentDay = new Date().getDay();
    //To display the content of the day element
    const currentDayOfTheWeek = document.querySelector("[data-testid='currentDayOfTheWeek']");
    currentDayOfTheWeek.textContent = daysOfWeek[currentDay];

    //To determine current UTC time in real-time
    let currentUTCTimeElement = document.querySelector("[data-testid='currentUTCTime']");
    function realTimeUTC() {
        //To display the content of the time element
        let currentUTCTime = Date.now();
        currentUTCTimeElement.textContent = currentUTCTime;
    }
    
    //Calling function to display and update in real-time
    realTimeUTC();
    setInterval(realTimeUTC, 1000)
});
 