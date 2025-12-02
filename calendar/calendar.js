document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("viewEventModal");
    const closeDetailBtn = document.querySelector(".close-details");
    const detailName = document.getElementById("detailName");
    const detailDate = document.getElementById("detailDate");
    const detailTime = document.getElementById("detailTime");
    const detailDesc = document.getElementById("detailDesc");
    const btnDelete = document.getElementById("deleteEventBtn");

    let currentId = null;

    loadCalendar();
    loadSideList();

    function loadCalendar() {
        const existing = document.querySelectorAll(".event-marker");
        for (let i = 0; i < existing.length; i++) {
            existing[i].remove();
        }

        let allEvents = JSON.parse(localStorage.getItem("myCalendarEvents"));
        if (!allEvents) {
            allEvents = [];
        }

        const days = document.querySelectorAll(".day");
        
        days.forEach(dayBox => {
            if (dayBox.classList.contains("empty")) return;

            const numSpan = dayBox.querySelector(".date-num");
            if (numSpan) {
                let d = numSpan.textContent;
                if (d.length === 1) {
                    d = "0" + d;
                }
                
                let checkDate = "2025-11-" + d;
                
                const eventsToday = allEvents.filter(e => e.date === checkDate);

                eventsToday.forEach(evt => {
                    const div = document.createElement("div");
                    div.classList.add("event-marker");
                    div.innerText = evt.name;
                    div.addEventListener("click", (e) => {
                        e.stopPropagation();
                        showModal(evt);
                    });
                    dayBox.appendChild(div);
                });
            }
        });
    }

    function loadSideList() {
        const list = document.querySelector(".reminder-list");
        if (list) {
            list.innerHTML = "";
            let myEvents = JSON.parse(localStorage.getItem("myCalendarEvents"));
            if (!myEvents) myEvents = [];

            myEvents.sort(function(a, b) {
                return new Date(a.date + " " + a.time) - new Date(b.date + " " + b.time);
            });

            for (let i = 0; i < myEvents.length; i++) {
                const item = myEvents[i];
                const card = document.createElement("div");
                card.classList.add("reminder-card");
                
                const titleDiv = document.createElement("div");
                titleDiv.classList.add("reminder-title");
                titleDiv.innerText = item.name;

                const timeDiv = document.createElement("div");
                timeDiv.classList.add("reminder-time");
                timeDiv.innerText = item.date + " " + item.time;

                card.appendChild(titleDiv);
                card.appendChild(timeDiv);

                card.addEventListener("click", () => {
                    showModal(item);
                });

                list.appendChild(card);
            }
        }
    }

    function showModal(data) {
        currentId = data.id;
        detailName.innerText = data.name;
        detailDate.innerText = data.date;
        detailTime.innerText = data.time;
        if (data.description) {
            detailDesc.innerText = data.description;
        } else {
            detailDesc.innerText = "No description provided";
        }
        modal.classList.add("show");
    }

    if (btnDelete) {
        btnDelete.addEventListener("click", () => {
            if (confirm("Are you sure you want to delete this event?")) {
                let data = JSON.parse(localStorage.getItem("myCalendarEvents"));
                const newData = [];
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id !== currentId) {
                        newData.push(data[i]);
                    }
                }
                localStorage.setItem("myCalendarEvents", JSON.stringify(newData));
                modal.classList.remove("show");
                loadCalendar();
                loadSideList();
            }
        });
    }

    if (closeDetailBtn) {
        closeDetailBtn.addEventListener("click", () => {
            modal.classList.remove("show");
        });
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove("show");
        }
    }

    const toggle = document.querySelector(".ToggleBtn");
    const container = document.querySelector(".EventContainer");

    if (toggle) {
        toggle.addEventListener("click", () => {
            if (container.classList.contains("active")) {
                container.classList.remove("active");
            } else {
                container.classList.add("active");
            }
        });
    }

    const form = document.getElementById("eventForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const n = document.getElementById("eventName").value;
            const d = document.getElementById("eventDate").value;
            const t = document.getElementById("eventTime").value;
            const desc = document.getElementById("eventDesc").value;

            if (n === "" || d === "" || t === "") {
                alert("Please fill in required fields!");
                return;
            }

            const obj = {
                id: Date.now(),
                name: n,
                date: d,
                time: t,
                description: desc
            };

            let arr = JSON.parse(localStorage.getItem("myCalendarEvents"));
            if (!arr) {
                arr = [];
            }
            arr.push(obj);

            localStorage.setItem("myCalendarEvents", JSON.stringify(arr));

            alert("Event Saved Successfully!");
            
            document.getElementById("eventName").value = "";
            document.getElementById("eventDate").value = "";
            document.getElementById("eventTime").value = "";
            document.getElementById("eventDesc").value = "";

            container.classList.remove("active");
            loadCalendar();
            loadSideList();
        });
    }
});