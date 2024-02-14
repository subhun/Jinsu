function buildCalendar(year = new Date().getFullYear(), month = new Date().getMonth()) {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let calendarBody = document.getElementById("calendar-body");
    calendarBody.innerHTML = "";

    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            let cell = document.createElement("td");
            if (i === 0 && j < firstDay) {
                // 초기 행에서 첫 번째 날짜 전까지는 셀을 비워둠
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break; // 해당 월의 모든 날짜가 처리되면 반복 종료
            } else {
                cell.innerText = date;
                cell.addEventListener("click", onDateClick); // 여기에 클릭 이벤트 리스너 추가
                row.appendChild(cell);
                date++;
            }
        }
        calendarBody.appendChild(row);
    }

    document.getElementById("calendar-month-year").innerText = `${year}년 ${month + 1}월`;
}

// 페이지가 로드될 때 달력을 처음에 한 번 그림
buildCalendar();

function onDateClick(event) {
    const selectedDate = event.target.innerText;
    const schedule = prompt("스케줄을 입력하세요:", "");
    if (schedule) {
        // 선택한 날짜에 스케줄을 저장하는 로직을 여기에 추가합니다.
        // 예: localStorage 사용 또는 서버에 저장하는 코드
        console.log(`날짜: ${selectedDate}, 스케줄: ${schedule}`);
    }
}

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

document.getElementById("prev-month").addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    buildCalendar(currentYear, currentMonth); // 현재 연도와 월을 파라미터로 전달
});

document.getElementById("next-month").addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    buildCalendar(currentYear, currentMonth); // 현재 연도와 월을 파라미터로 전달
});
document.getElementById('calendar-month-year').addEventListener('click', function() {
    let yearMonth = prompt("연도와 월을 입력하세요 (예: 2024-02):");
    if (yearMonth) {
        // 입력받은 값으로 달력을 업데이트하는 로직을 추가합니다.
        // 예시: document.getElementById('calendar-month-year').innerText = `${year}년 ${month}월`;
        console.log("선택된 날짜:", yearMonth); // 실제 구현 필요
    }
});

document.getElementById("addScheduleModal").addEventListener("click", function() {
    document.getElementById("scheduleModal").style.display = "block"; // 모달 표시
});

function addSchedule() {
    const date = document.getElementById("scheduleDate").value;
    const text = document.getElementById("scheduleText").value;
    // 입력 값 검증 후 달력에 스케줄 추가 로직 구현
    console.log(date, text); // 실제 구현 필요
    document.getElementById("scheduleModal").style.display = "none"; // 모달 숨김
}

// 달력 날짜 클릭 시 이벤트 처리
document.querySelectorAll("#calendar-table td").forEach(td => {
    td.addEventListener("click", function() {
        const selectedDate = this.innerText;
        const scheduleText = prompt("스케줄을 입력하세요:");
        // 입력 받은 스케줄을 달력에 추가하는 로직 구현
        console.log(selectedDate, scheduleText); // 실제 구현 필요
    });
});
