const sentence = document.querySelector("h3#explain");

const date = new Date();
const hours = date.getHours();

if (8 <= hours && hours <= 12) {
    explain.innerText = "오늘 하루도 기분 좋게 시작!";
}
else if (hours == 13) {
    explain.innerText = "점심식사 맛있게 하세요 :)";
}
else if (14 <= hours && hours <= 17) {
    explain.innerText = "나른한 오후엔 역시 스트레칭이죠~";
}
else if (18 <= hours && hours <= 19) {
    explain.innerText = "오늘 하루도 수고 많으셨어요!";
}
else if (20 <= hours && hours <= 23) {
    explain.innerText = "내일 할 일, 정리하셨나요?";
}
else {
    explain.innerText = "좋은 꿈 꾸세요.";
}