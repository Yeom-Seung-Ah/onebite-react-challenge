/* 
[영화 리뷰 정보 출력하기 (feat. 오펜하이머)]
목표: 영화 리뷰 정보가 담긴 객체를 매개변수로 받아 출력하는 함수 printMovieReview를 완성하세요

다음 요구사항을 만족하는 코드를 작성하세요

- 함수 printMovieReview는 구조 분해 할당을 통해 인수로 전달된 영화 정보 객체의 프로퍼티들을 각각 제공받습니다.
- 매개변수로 제공된 영화 정보들을 다음과 같이 출력합니다.

  - 영화 제목은 "제목 : {제목}" 형태로 출력합니다.
  - 영화 개봉 연도는 "개봉 : {개봉연도}" 형태로 출력합니다.
  - 첫 번째 리뷰어를 "첫 번째 리뷰어 : {이름}" 형태로 출력합니다.

    - 배열의 비 구조화 할당을 이용하세요 
*/

function printMovieReview({ title, releaseYear, reviewers }) {
  // 코드를 입력하세요 ...
  console.log(`제목: ${title}`);
  console.log(`개봉: ${releaseYear}`);

  const [firstReviewer = "리뷰어 미정"] = reviewers; //구조 분해 할당

  console.log(`첫 번째 리뷰어 : ${firstReviewer}`);
}

printMovieReview({
  title: "하얼빈",
  releaseYear: 2024,
  reviewers: ["박정민", "김효빈", "이정환"],
});

// 출력 결과 :
// 제목 : 하얼빈
// 개봉 : 2023
// 첫 번째 리뷰어 : 박정민

printMovieReview({
  title: "위키드",
  releaseYear: 2024,
  reviewers: [],
});

// 출력 결과 :
// 제목 : 위키드
// 개봉 : 2024
// 첫 번째 리뷰어 : 리뷰어 미정
