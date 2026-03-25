const quotes = [
  {
    quote: "시작이 반이다",
    author: "속담",
  },
  {
    quote: "천 리 길도 한 걸음부터",
    author: "속담",
  },
  {
    quote: "포기하지 않으면 실패는 없다",
    author: "익명",
  },
  {
    quote: "행동은 모든 성공의 기초다",
    author: "파블로 피카소",
  },
  {
    quote: "오늘 할 수 있는 일을 내일로 미루지 마라",
    author: "벤자민 프랭클린",
  },
  {
    quote: "기회는 준비된 자에게 온다",
    author: "루이 파스퇴르",
  },
  {
    quote: "노력은 배신하지 않는다",
    author: "익명",
  },
  {
    quote: "어제보다 나은 오늘이면 충분하다",
    author: "익명",
  },
  {
    quote: "작은 습관이 큰 변화를 만든다",
    author: "제임스 클리어",
  },
  {
    quote: "성공은 반복된 작은 선택의 결과다",
    author: "익명",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = Math.floor(Math.random() * quotes.length);
quote.innerText = quotes[todaysQuote].quote;
author.innerText = quotes[todaysQuote].author;
