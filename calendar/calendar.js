document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("viewEventModal");
    const closeDetailBtn = document.querySelector(".close-details");
    const detailName = document.getElementById("detailName");
    const detailDate = document.getElementById("detailDate");
    const detailTime = document.getElementById("detailTime");
    const detailDesc = document.getElementById("detailDesc");
    const btnDelete = document.getElementById("deleteEventBtn");
    
    const calendar_days = document.querySelector('.calendar-days');
    const month_year_display = document.querySelector('#month-year-display');
    
    let currentId = null;

    const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    let currentDateObj = new Date();
    let currentMonth = { value: currentDateObj.getMonth() };
    let currentYear = { value: currentDateObj.getFullYear() };

    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0);
    };

    const getFebDays = (year) => {
        return isLeapYear(year) ? 29 : 28;
    };

    const generateCalendar = (month, year) => {
        calendar_days.innerHTML = '';
        
        month_year_display.innerHTML = `${month_names[month]} ${year}`;

        let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let first_day = new Date(year, month, 1);

        let allEvents = JSON.parse(localStorage.getItem("myCalendarEvents")) || [];

        for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
            let day = document.createElement('div');
            
            if (i >= first_day.getDay()) {
                let dayNum = i - first_day.getDay() + 1;
                
                day.innerHTML = `<span class="date-num">${dayNum}</span>`;
                
                if (dayNum === currentDateObj.getDate() && year === currentDateObj.getFullYear() && month === currentDateObj.getMonth()) {
                    day.classList.add('current-date');
                }

                let checkDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
                const eventsToday = allEvents.filter(e => e.date === checkDate);

                if (eventsToday.length > 0) {
                    eventsToday.forEach(evt => {
                        const marker = document.createElement("div");
                        marker.classList.add("event-marker");
                        marker.innerText = evt.name;
                        marker.addEventListener("click", (e) => {
                            e.stopPropagation();
                            showModal(evt);
                        });
                        day.appendChild(marker);
                    });
                }
            }
            calendar_days.appendChild(day);
        }
    };

    function loadSideList() {
        const list = document.querySelector(".reminder-list");
        if (list) {
            list.innerHTML = "";
            let myEvents = JSON.parse(localStorage.getItem("myCalendarEvents")) || [];
            
            myEvents.sort((a, b) => new Date(a.date + " " + a.time) - new Date(b.date + " " + b.time));

            myEvents.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("reminder-card");
                
                card.innerHTML = `
                    <div class="reminder-title">${item.name}</div>
                    <div class="reminder-time">${item.date} ${item.time}</div>
                `;

                card.addEventListener("click", () => showModal(item));
                list.appendChild(card);
            });
        }
    }

    function showModal(data) {
        currentId = data.id;
        detailName.innerText = data.name;
        detailDate.innerText = data.date;
        detailTime.innerText = data.time;
        detailDesc.innerText = data.description || "No description provided";
        modal.classList.add("show");
    }

    if (btnDelete) {
        btnDelete.addEventListener("click", () => {
            if (confirm("Are you sure you want to delete this event?")) {
                let data = JSON.parse(localStorage.getItem("myCalendarEvents")) || [];
                const newData = data.filter(e => e.id !== currentId);
                
                localStorage.setItem("myCalendarEvents", JSON.stringify(newData));
                modal.classList.remove("show");
                
                generateCalendar(currentMonth.value, currentYear.value);
                loadSideList();
            }
        });
    }

    if (closeDetailBtn) closeDetailBtn.addEventListener("click", () => modal.classList.remove("show"));
    window.onclick = (event) => { if (event.target == modal) modal.classList.remove("show"); };

    const form = document.getElementById("eventForm");
    const container = document.querySelector(".EventContainer");
    const toggle = document.querySelector(".ToggleBtn");

    if (toggle) {
        toggle.addEventListener("click", () => {
            container.classList.toggle("active");
        });
    }

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const n = document.getElementById("eventName").value;
            const d = document.getElementById("eventDate").value;
            const t = document.getElementById("eventTime").value;
            const desc = document.getElementById("eventDesc").value;

            if (!n || !d || !t) { alert("Please fill in required fields!"); return; }

            const obj = { id: Date.now(), name: n, date: d, time: t, description: desc };

            let arr = JSON.parse(localStorage.getItem("myCalendarEvents")) || [];
            arr.push(obj);
            localStorage.setItem("myCalendarEvents", JSON.stringify(arr));

            alert("Event Saved Successfully!");
            form.reset();
            
            container.classList.remove("active");
            
            generateCalendar(currentMonth.value, currentYear.value);
            loadSideList();
        });
    }

    document.querySelector('#prev-month').onclick = () => {
        currentMonth.value--;
        if (currentMonth.value < 0) {
            currentMonth.value = 11;
            currentYear.value--;
        }
        generateCalendar(currentMonth.value, currentYear.value);
    };

    document.querySelector('#next-month').onclick = () => {
        currentMonth.value++;
        if (currentMonth.value > 11) {
            currentMonth.value = 0;
            currentYear.value++;
        }
        generateCalendar(currentMonth.value, currentYear.value);
    };

    generateCalendar(currentMonth.value, currentYear.value);
    loadSideList();
});