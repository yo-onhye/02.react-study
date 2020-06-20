# Football Api 활용

## Football Api를 이용하여 날짜에 맞는 데이터 가져오기

**axios 활용**

axios는 node.js와 브라우저를 위한 http통신 javascript 라이브러리

## Homework

### 뒤로가기/앞으로 가기 구현하기

**Router를 이용하여 구현**

브라우저가 히스토리를 트래킹하는 것을 이용해서 할 수 있을 것 같은데, leagueId를 이용하는 방식으로 구현

**작업 방식**
- App.js에 Route 추가
- LeaguItem.js의 상단 GNB 메뉴를 NavLink로 수정 후, /league_id로 이동하도록 추가

**작업 결과**
- 주소 값이 변경되어 뒤로가기/앞으로 가기 버튼이 활성화 되지만, 데이터가 변경되지 않음
