# 숙제 1

## 비밀번호 검증하기
이번 숙제에서는 email과 password를 입력받아 실제 회원가입처럼 진짜 이메일이고(***'@'이 포함됨***), 비밀번호가 안전(***길이가 6 이상 && 알파벳 대소문자 각각 포함됨***)할 때에만 버튼이 클릭 가능하게끔 하고자 합니다.
버튼의 경우, 클릭되었을 때 별다른 동작을 하지 않아도 괜찮습니다.

다음의 사진처럼 동작하면 됩니다. 레이아웃은 자유입니다.

![image](https://user-images.githubusercontent.com/5348027/82224506-dd7aa780-995e-11ea-8b03-436f0c0954b6.png)

![image](https://user-images.githubusercontent.com/5348027/82224580-faaf7600-995e-11ea-91d8-8b987adcdd2f.png)


## 보너스
각각의 조건을 만족하지 못할때는, 왜 만족하지 않는지 메시지를 띄워주세요. 메시지 형식은 자유이며, 굳이 입력창 옆에 띄우지 않아도 괜찮습니다.

![image](https://user-images.githubusercontent.com/5348027/82225110-b5d80f00-995f-11ea-8f77-3308be8de78a.png)

## 제출
터미널에서
```yarn create react-app hw1```
을 한 후에, hw1/src/App.js에 작업하여 주세요.

Git 사용이 익숙하신 분은 hw1의 Git 저장소 링크를 저에게 보내주셔도 좋고, 익숙하지 않으신 분은 App.js 파일만 슬랙으로 보내주시면 됩니다.

### 힌트
실제 이메일은 '@' 포함 외에도 다른 조건이 많지만, 이번에는 편의를 위해 '@'의 존재 여부만 체크합니다.

강의시간에 한 것처럼 2개의 input(name="email", name="password")를 만들고, ```setState```와, ```onChange```를 이용하면 쉽습니다.

<details>
  <summary>암호 입력 받기</summary>
  
```input```의 ```type```을 ```"password"```로 설정하면 암호 입력칸을 만들 수 있습니다.
</details>

<details>
  <summary>버튼 비활성화</summary>
  
```button```의 ```disabled``` 속성을 이용하면 버튼의 활성화 여부를 결정할 수 있습니다.
</details>

<details>
  <summary>'@' 포함 확인</summary>
  
```console.log("abc".includes('@'))```

</details>

<details>
  <summary>비밀번호의 길이</summary>
  
```console.log("abc".length)```
</details>

<details>
  <summary>대소문자 여부 확인하기</summary>
  소문자: https://stackoverflow.com/questions/2830826/javascript-checking-for-any-lowercase-letters-in-a-string
</details>
