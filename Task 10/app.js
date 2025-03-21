document.addEventListener("DOMContentLoaded", function () {
    const hour = document.getElementById("hour");
    const minute = document.getElementById("minutes");
    const second = document.getElementById("seconds");
    const day = document.getElementById("day");
    const AmPm=document.getElementById('AMPM')

    const monthName = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    function updateClock() {
        let today = new Date();
        let d = today.getDate();
        let m = today.getMonth(); // Get month index (0-11)
        let y = today.getFullYear();
        let h = today.getHours();
        let min = today.getMinutes();
        let sec = today.getSeconds();
        let ampm = h >= 12 ? "PM" : "AM"; // Determine AM or PM

        // Convert to 12-hour format
        h = h % 12;
        h = h ? h : 12; // If hour is 0, set it to 12

        // Format numbers to always show two digits
        h = h < 10 ? "0" + h : h;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        // Update elements
        day.textContent = `${d} ${monthName[m]} ${y}`;
        hour.innerHTML = `${h}`;
        minute.textContent = min;
        second.textContent = sec;
        AmPm.textContent=ampm;
    }

    // Run updateClock immediately and every second
    updateClock();
    setInterval(updateClock, 1000);
});
