const quotes = [
{
    quote: "살아가면서 너무 늦거나 너무 이른 건 없단다.", 
    author: "<벤자민 버튼의 시간은 거꾸로 간다>, 2008",
},
{
    quote: "아름다운 새벽이었어", 
    author: "<동경이야기>, 1953",
},
{
    quote: "50년이 지나서 내가 누군가의 행복었다는 사실을 알았어. 정말 멋진 일이야.", 
    author: "<원더풀 라이프>, 2001",
},
{
    quote: "우리 삶에서 가장 위대한 것은 사랑하는 것이고 또 사랑받는 것이다.", 
    author: "<물랑 루즈>, 2001",
},
{
    quote: "결과를 알고 있음에도, 어떻게 흘러갈지 알면서도, 난 모든걸 껴안을거야. 그리고 그 모든 순간을 반길꺼야.", 
    author: "<컨택트>, 2017",
},
{
    quote: "당신은 내가 더 좋은 사람이 되고 싶게 만들었소.", 
    author: "<이보다 더 좋을 순 없다>, 1997",
},
{
    quote: "만약 사랑에 유통기한을 적어야 한다면 난 그 기간을 만년으로 적고 싶다.", 
    author: "<중경삼림>, 1994",
},
{
    quote: "그대의 여름날은 시들지 않으리라. 그대의 아름다움도 시들지 않으리라.", 
    author: "<노매드랜드>, 2021",
},
{
    quote: "때론 빈 페이지가 가장 많은 가능성을 선사하죠.", 
    author: "<패터슨>, 2017",
},
{
    quote: "내가 이 나무를 왜 좋아하는지 알아? 쓰러졌는데도 자라나서.", 
    author: "<플로리다 프로젝트>, 2018",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;