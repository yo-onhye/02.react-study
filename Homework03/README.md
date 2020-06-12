# 숙제 3

## 최악의 API와 함께 AXIOS 연습하기

수업 때 `axios`를 이용하여 HTTP통신하는 것을 잠깐 했었죠. 그 연장선으로 `axios`를 사용하면서 에러처리 등을 해보고자 합니다.

다음은 저희가 통신할 서버의 api입니다.

| API                                          | GET               |
| -------------------------------------------- | ----------------- |
| `http://askat.me:8000/api/lotto1`            | ????              |
| `http://askat.me:8000/api/lotto2`            | ????              |
| `http://askat.me:8000/api/fortune/:birthday` | ????              |
| `http://askat.me:8000/api/slow`              | string            |
| `http://askat.me:8000/api/bad`               | 숫자 or 404 Error |

1. `api/lotto1`은 `1 - 22` 사이의 숫자 `3`개를 반환합니다. `api/lotto2`는 `23 - 45` 사이의 숫자 `3`개를 반환합니다.
   각각은 *최신식 블록체인 기반 인공지능 빅데이터 뉴럴 네트워크 추천 알고리즘*을 사용하여 최적화된 로또번호를 계산하는데 약 **10**초가 걸립니다.

2. `/api/fortune/:birthday`는, `http://askat.me:8000/api/fortune/1993-10-10`와 같은 방식으로, 날짜를 넣어주시면 됩니다.

3. `GET`의 정보가 `????`인 `lotto`와 `fortune`은 직접 데이터의 구조가 어떻게 되어있는지 확인해보세요. `data`외에도 다른 필드 또한 관찰해보세요.

```jsx
axios.get("http://askat.me:8000/api/lotto1").then((response) => {
	console.log(response.data);
	console.log(response.status);
	console.log(response.statusText);
	console.log(response.headers);
	console.log(response.config);
});
axios.get("http://askat.me:8000/api/fortune/1993-10-10").then((response) => {
	console.log(response);
});
```

3. `.../api/bad`는 50%의 확률로 숫자를 반환하지만, 50%의 확률로 [HTTP status code](https://www.restapitutorial.com/httpstatuscodes.html)가 `404`인 `Not Found Error`를 반환합니다.

4. `.../api/slow`는 는 5초 후에 response의 data에 "1234567890"을 반환합니다.

## 2. 상세

`App.js`에는 버튼 5개와,
`fortune` api에 필요한 생년월일을 입력할 input을 만들어주시면 됩니다.

0. `input`은 날짜를 입력받아서 `birthday`라는 `state`에 저장해주시면 됩니다.

1. 버튼 A는 `lotto1`, `lotto2`를 호출. `response`에서 얻은 `????`를 합쳐서 "1 2 3 4 5 6" 처럼 공백으로 구분 된 문자열로 만들고,
   `data`라는 `state`에 저장. 2개의 api를 각각 호출하면 **20**초가 걸리게 되므로, 병렬로 계산하여 **10**초 정도 걸릴 수 있도록 해주세요.

2. 버튼 B는 `input`이 관리하는 `this.state.birthday`를 `fortune`에 인자로 주어서 호출.
   `response`에서 얻은 `????`을 data라는 state에 저장. `birthday === ''` 인 경우 에러가 나니 주의해주세요.

3. 버튼 C는 `bad` api를 호출합니다. 정상적인 response라면 response에서 얻은 숫자를 data에 저장.
   404 response라면 `ooops!`같은 에러메시지가 있는 팝업창을 띄워주시면 됩니다.

4. 버튼 D는 `slow` api를 호출합니다. caching을 활용하여 처음에만 5초가 걸리고, 그 후에는 사전에 얻은 "1234567890"를 그대로 사용할 수 있도록 해주세요.
   `yarn add axios-cache-adapter`를 하고나서, https://www.npmjs.com/package/axios-cache-adapter 의 설명을 읽고 구현해보세요.

```jsx
render() {
    // ...
    {this.state.data}
}
```

등의 방식으로 간단하게 결과물을 출력해주세요.

**(예시)**

![image](https://user-images.githubusercontent.com/5348027/75247343-0b939400-5815-11ea-94de-44772529b7c0.png)

### 힌트

<details>
  <summary>에러 처리?(중요)</summary>
  
```console.log(response)```를 해보시면 ```response```가 ```status```를 가지고 있음을 확인할 수 있습니다.

그러나 `if (response.status === 404)` 같은 방식으로는 에러처리를 할 수가 없습니다.

`axios.get()`의 `response.status`에서 `404`처럼, `2XX`이외의 status code가 나온경우, 서버에서 온 답변의 안정성을 보장할 수 없어서 `.then(response => {...})` 코드는 아예 실행이 되지 않습니다.

이 경우에는 `.catch(error => {...error handling code})`로 등록한 error handling code가(`type: error -> undefined`)가 실행됩니다. 뿐만 아니라, `.then`에서 코드를 수행하다가 에러가 나더라도, `.catch`의 error handling code가 수행되게 됩니다.
error handling code에서 `console.log(error)`로 error 또한 출력해 볼 수 있구요.

네트워크 요청은 이런저런 이유로 에러가 발생하는 경우가 많으니, 귀찮더라도 꼭 error handling까지 하는 것이 좋습니다.

```jsx
axios
	.get("http://askat.me:8000/api/lotto")
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		//get이 실패하거나, .then에서 에러가 나면 실행됨
		console.log(error);
	});
```

</details>

<details>
  <summary>병렬 처리</summary>
  
axios의 공식 문서를 참조하시면, 병렬로 request를 보내는 방법이 나와있습니다.
</details>

<details>
  <summary>날짜 입력받기</summary>
  
```jsx
<input name="birthday" type="date" .../>
```
</details>

<details>
  <summary>날짜 인자로 넘겨주기</summary>
  
```jsx
'http://askat.me:8000/api/fortune/' + this.state.birthday
```
</details>

<details>
  <summary>팝업창 띄우기</summary>

```jsx
window.alert("ooops!");
```

</details>

<details>
  <summary> [1, 2, 3] 을 "1 2 3" 으로 만들기?</summary>
  
https://www.w3schools.com/jsref/jsref_join.asp
</details>
