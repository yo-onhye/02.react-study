# 2020.05.30 수업

---

## 과제
* 삭제하기 버튼 옆에 수정하기 버튼을 만들고, 버튼을 클릭하면 아이디, 비밀번호, 수정확인 구조 노출
* 기존 값이 인풋에 들어와 있어야 하고, 확인 버튼을 누르면 기존 값이 변경
* 수정하기 버튼을 누르면, 다른 li의 수정 구조는 비노출

---

## 과제 결과
* 수정하기 버튼을 눌렀을때, 다른 li의 수정 구조가 비노출 되는 부분 미완성..
→ `isActive`를 개별로 받아야하는데, 전체적으로 받아 같이 제어되고 있었음.
* 수정 영역 보여지는 액션을 class로 제어하지 않고, isActive 값으로 해당 영역 노출/비노출 제어
* 수정 영역 input에 `autoFocus` 속성을 추가하면, 해당 입력 서식으로 포커스가 이동한다.