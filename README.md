# 지출 기록부 만들기

**이 프로젝트는 Fastcampus의 Byte Degree Program 수강생을 대상으로 마련된 과제입니다.**

## 프로젝트 소개

리액트의 기초를 익히고 Todo list 애플리케이션까지 구현해본 여러분들에게  
Todo list 보다 약간 어려운 단계의 과제를 준비해 보았습니다.

기본은 Todo list 제작까지 배웠던 리액트 기초 내용을 조금 응용하여 컴포넌트를 추가로 만들어보고  
Todo 아이템보다 조금 더 복잡한 자료를 처리해야 하는 지출 기록부를 만들어봅시다.

## 구현해야 하는 기능

지출 기록부는 다음의 기능을 가지고 있습니다.

![지출 기록부 완성된 예시 스크린샷](https://p177.p0.n0.cdn.getcloudapp.com/items/d5u0gwvn/expensebook-1.png?v=f8b6520b247c0a3efda60afa4dcae52f)

- 오늘의 날짜 표시
- 지출의 등록
- 등록된 지출의 삭제
- 현재까지 등록된 지출의 총합 표시
- (옵션) 등록된 지출의 수정
- (옵션) 등록된 지출을 카테고리별로 모아 보기

**(옵션)** 으로 표시된 항목은 처음에 구현이 어렵다면, 너무 어려워하지 마시고 점점 리액트에 익숙해지고 난 뒤 복습하면서 다시 만들어 보세요.

## 개발 환경 설정하기

이 프로젝트를 클론한 뒤, 클론한 프로젝트의 폴더로 가서 의존성 패키지를 설치합니다.

```
$ git clone https://github.com/adhrinae/react-simple-expensebook.git
$ cd react-simple-expensebook
$ npm install
```

## 구현 시 참고 사항

- 컴포넌트 스타일링을 하는 방식은 자유입니다. (CSS, SCSS, CSS Modules, styled-components 등)
- 리듀서를 다루기 번거롭게 느껴진다면 `immer` 패키지를 사용해보세요.
- 어디부터 시작해야 할지 막막하다면 `example` 브랜치로 이동해서 커밋 로그를 하나씩 살펴보세요.
