# 숙제 4

## Router로 배우는 TDD 101

지금까지 숙제를 하시면서 프로그램이 의도대로 작동하는지 어떻게 확인하셨나요? `yarn start`하고 브라우저에서 이것저것 눌러보거나,
`console.log()`로 이런저런 값을 찍어 볼 수도 있었죠. 그런데 프로그램의 규모가 커지고 협업하는 사람이 늘어날 수록, 이런 방식에는 한계가 있습니다.

그래서 이번 숙제에서는 **테스트 주도형 개발(Test Driven Development)** 과 **단위 테스트(unit testing)** 의 맛보기를 하고자 합니다.

## 테스트 주도형 개발

테스트 주도형 개발은 프로그램을 만들고 나서 테스트 하는 것이 아니라,
테스트를 미리 작성하고, 그 테스트를 만족시키는 코드를 작성하는 것을 의미합니다.
일단 테스트를 만족시키는 코드를 완성했다면, 테스트를 만족시키는 한은 자유롭게 코드를 개선 할 수 있어서 좋습니다.

## 단위 테스팅

단위 테스팅은 프로그램을 여러 개의 단위로 쪼개서(저희는 Component 단위로 쪼개는 것이 편하겠죠), 각각을 독립적으로 테스트하는 것입니다.
작은 단위에서 옳고 그름을 검증할 수 있어서 버그를 사전에 찾는데 용이합니다. 또한, 단위 테스트가 어렵다는 것은(똑같은 일을 하는 다른 단위가 너무 많다든지, 구조가 너무 복잡하다든지) 프로그램의 설계가 잘못됐다는 방증이 되기도 합니다.

지금까지 해왔던 것처럼 Component가 다른 Component를 갖고있거나, API 등 외부의 영향을 받을 때는 어떻게 독립적으로 테스트할까요?
이럴 땐 mocking이라고 하여 외부요소를 흉내내는 코드를 작성하게 되는데, 아래에서 다시 다루겠습니다.

### Jest

Jest는 자바스크립트 테스트 프레임워크입니다. 리액트 뿐만 아니라 Angular, Vue, Node, TypeScript 등의 테스트에도 쓰일 수 있습니다.
다음은 jest 테스트 의 구조입니다.

```jsx
describe('name of test suite', () => {//테스트들의 묶음
  beforeAll(function() {}); //테스트 묶음 시작 전 수행되는 함수
  afterAll(function() {}); //테스트 묶음이 끝난 이후에 수행되는 함수
  beforeEach(function() {}); //각각의 테스트 시작 전 수행
  afterEach(function() {}); //각각의 테스트가 끝난 이후에 수행
  it ('should/contains ... spec1, 테스트하는 것을 잘 묘사하도록', () => {//spec1에 대한 테스트
     //시나리오 수행
     expect(true).toBe(true); //결과분석
     expect(1).toEqual(1); //결과분석
  });
   it ('should/contains ... spec2', () => {//spec2에 대한 테스트
     //시나리오 수행
     expect(3+3).toBe(6); //결과분석
  });
  ...
});
```

### Enzyme

enzyme은 리액트를 위한 테스트 라이브러리로, DOM 구조에 접근을 도와줍니다. Jest와 함께 쓰이게됩니다.

## 그래서 숙제는?

https://github.com/taehioum/homework4 를 포크 한 후에,
![image](https://user-images.githubusercontent.com/5348027/75779225-9556da80-5d9c-11ea-8155-8b3321f16ff0.png)
터미널에서

```bash
git clone https://github.com/{깃헙유저명}/homework4
cd homework4
yarn
yarn add enzyme
yarn test --coverage --watchAll=false
```

를 해보시면
![image](https://user-images.githubusercontent.com/5348027/75779756-8ae91080-5d9d-11ea-8712-db10012eb7fb.png)
와 같이 뜨게 됩니다. 유심히 보시면 3개의 테스트 파일에서 찾은 13개의 테스트 중, 9개는 실패했음을 아실 수 있습니다.

9개의 실패한 테스트 중 8개는 코드의 문제로 인한 것이며, 나머지 1개는 테스트의 내용이 비어있습니다.

이번 숙제의 목적은 9개의 테스트를 성공시키는 것입니다! 클론한 폴더에 작성하신 뒤에, 커밋하고 푸시해주시면 되겠습니다.

### 보너스

외부의 영향을 받는 것을 mocking해야 한다고 했었죠. `axios.get`은 외부의 영향을 받는 것의 좋은 예입니다.
`Fortune.js`에서 axios.get으로 숙제 3에서 처럼 `FORTUNE_API`를 호출해보고, `Fortune.test.js`에서 axios.get을 mocking하여서, 테스트가 서버와 상관없이 돌아갈 수 있도록 해주세요.

axios의 mocking은 https://stackoverflow.com/a/51654713 를 참조해주세요. 요약하자면, axios.get은 결국 url을 받아서 Promise.resolve({status: 200, data: "HI"})를 반환하는 함수에 불과합니다. (저희의 프로그램에서 response의 다른 field도 요구한다면, 추가해줘야겠지만 지금은 status와 data만을 이용하니깐 괜찮습니다.)

### 가이드

<details>
  <summary>뒤로 갈수록 부실해지는 가이드</summary>

## App.test.js

`src/components/App.test.js`는 `src/components/App.js`의 테스트를 위한 코드입니다.
같이 이 테스트를 이해해보고, `App.js`의 대부분을 완성시켜 보겠습니다.

### 테스트 설정

```jsx
//src/components/App.test.js 1~7

import React from "react";
import { shallow, mount } from "enzyme"; // 1
import App from "./App";
import Main from "./Main";
import Profile from "./Profile";
import Fortune from "./Fortune";
import { MemoryRouter } from "react-router-dom"; // 2
```

1. `import {shallow, mount} from 'enzyme'`<br>
   `shallow`는 Component를 가상으로 렌더링해주는 함수입니다. 다만, 자식 컴포넌트를 렌더링하지 않습니다.(`<div>`같은 HTML Element는 렌더링 해줍니다.)<br>
   `mount`는 `shallow`와 비슷하지만, 자식 컴포넌트 또한 렌더링해줍니다.

2. `import {MemoryRouter} from 'react-router-dom'`<br>
   `index.js`에서 `App.js`를 `<BrowserRouter>`로 감쌌었죠.
   테스트 환경에서는 브라우저가 없으므로, 메모리 상에서 Router를 작동시키는 `MemoryRouter`를 이용하여 Routing이 제대로 작동하는지 테스트 할 수 있습니다.

```jsx
//src/components/App.test.js Lines 9~11

jest.mock("./Main", () => {
	return (props) => <div id='main'> MockMain </div>;
});
jest.mock("./Profile", () => () => "mock");
jest.mock("./Fortune", () => () => "mock");
```

`mount`를 이용하여 자식 컴포넌트 또한 렌더링한다고 말씀드렸었죠.
그런데, 단위 테스트를 해야하니 이 테스트가 다른 컴포넌트에 영향을 받아서는 안됩니다.

그래서 `jest.mock`을 이용하여 다른 컴포넌트(`component/Main.js`, `component/Profile.js`, `component/Fortune.js`)를 모방한 단순한 컴포넌트를 만들어줘야합니다.
이번 테스트에서는 렌더링 되는지만 확인하므로, `Main`을 `jest.mock('컴포넌트/경로/', (props) => {...})`로 모방했습니다. 나머지 2개는 더 단순히 모방해보았습니다.

이제 이 테스트 동안 `App.js`에서 `<Main>`을 사용하게 되면 `src/components/Main.js`에서 정의한 React Component가 아니라, 단순한 `<div id="main"> MockMain </div>`가 쓰이게 됩니다.

### 테스트 시작

`App`의 첫 번째 테스트는 App이 제대로 렌더링 되는지 테스트합니다.

```jsx
//src/components/App.test.js
describe('App', () => {
  it ('should render without errors', () => {
    const component = shallow(<App/>);
    const wrapper = component.find(".App");
    expect(wrapper.length).toBe(1);
  });
}
```

`shallow`로 `App`을 렌더링 한 것을 `component`에 넣고,
`component.find(".App")`으로 **className** 이 `App`인 HTML Element들을 전부 찾습니다.(`find(.XX)`, CSS selector의 문법과 동일합니다.)

`expect(actual: 우리가 얻은 값).matcher(expected: 우리가 바라는 값)`이 테스트의 내용입니다.
`expect(wrapper.length).toBe(1)`는 `wrapper.length`(**className** 이 `App`인 HTML Element의 개수)가 1인지를 검사합니다.
`App.js`에서 `<div className="App">`가 1개이므로 이 테스트는 통과입니다!
![image](https://user-images.githubusercontent.com/5348027/75791880-92fe7b80-5db0-11ea-955e-6de0ecd982a3.png)

(이 화면은 `yarn test --watchAll=false` 수행 이후 터미널에서 위로 스크롤 해보시면 됩니다.)

`App`의 두 번째 테스트는 `localhost:3000/main`이 Main 컴포넌트를 렌더링하는지 테스트합니다.

```jsx
//src/components/App.test.js
it('should render main with "/main"', () => {
	const component = mount(
		<MemoryRouter initialEntries={["/main"]}>
			<App />
		</MemoryRouter>
	);
	expect(component.find(Main)).toHaveLength(1);
	expect(component.find("#main").length).toBe(1);
});
```

`index.js`에서처럼 `App`을 `MemoryRouter`로 감싸고, 시작주소를 `initialEntries`를 통해 `'/main'`으로 설정해줍니다.
이번에는 `shallow`대신 `mount`를 써서 `MemoryRouter`의 자식 컴포넌트가 되어버린 `App`과, `App`의 자식 컴포넌트들을 렌더링 해줍니다.

2개의 expect는 똑같은 일을 해줍니다.<br>
`expect(component.find(Main)).toHaveLength(1)`는 `component`에서 `find`한
`Main`이라는 컴포넌트가 1개인지를 검사합니다.<br>
`expect(component.find('#main').length).toBe(1)`는 **id** 가 `main`인 HTML Element(`find(#XX)`)가 1개인지를 검사합니다.

`jest.mock('./Main', () => {return ((props) => <div id="main"> MockMain </div>);})`<br>
로 `Main`을 **id** 가 `main`인 `<div>`로 모방해주었기 때문에, 두 expect는 같은 결과를 내놓습니다.

이 테스트는 실패합니다!

![image](https://user-images.githubusercontent.com/5348027/75791773-69455480-5db0-11ea-9001-a6ae4f1ace06.png)

`App.js`의 `Switch` 내부에서는 `path="/main"`인 `<Route>`가 정의되어 있지 않기 때문입니다.

```jsx
//src/components/App.js
...
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <???? ???? path="/???" component={???} />
          <Route path="/fortune/:name&:birthday" component={Fortune} />
        </Switch>
      </div>
    );
  }
}

export default App;
```

로 수정하고 다시 테스트를 수행하면 통과합니다.
(`yarn test App.test.js --watchAll=false`로 `App.test.js`만 돌려볼 수도 있습니다.)

![image](https://user-images.githubusercontent.com/5348027/75792571-7f9fe000-5db1-11ea-96ca-8d6d54173295.png)
![image](https://user-images.githubusercontent.com/5348027/75789227-b6272c00-5dac-11ea-81d9-eddadd6e6eef.png)

그 다음 테스트인 `it ('should render profile with "/profile"'` 도 비슷하게, Profile 컴포넌트가 렌더링 될 수 있게끔 해주시면 됩니다.

네 번째 테스트는 어떨까요?

```jsx
it("should goto main when clicking main link", () => {
	const component = mount(
		<MemoryRouter initialEntries={["/foo"]}>
			<App />
		</MemoryRouter>
	);
	const wrapper = component.find("#main-link");
	wrapper.first().simulate("click", { button: 0 });
	component.update();
	expect(component.find(Main)).toHaveLength(1);
});
```

테스트의 내용을 살펴보니, 임의의 주소인 '/foo'에서 **id** 가 `main-link`인 HTML Element들을 찾습니다.
그들 중 첫번째를 `.first()`로 찾고, `.simulate('click', {button: 0})`로 왼쪽 마우스로 클릭하였더니 Main 컴포넌트가 렌더링되어야 한다고 합니다. 1번을 수행하였다면 "/main"에 Main 컴포넌트가 있겠죠.
`App.js`에 `<???? id="main-link" to="/????"> main </????>`를 추가해주면 될 것 같네요.

(`update()`는 Enzyme에서 링크를 가상으로 클릭한후에, 내용물을 바꾸기 위해 필요합니다.)

다섯번째, `localhost:3000/`을 자동으로 `localhost:3000/main`으로 리다이렉션 시켜주는 지를 검사하는 테스트는

```jsx
it('should redirect "/" to "/main"', () => {
	const component = mount(
		<MemoryRouter initialEntries={["/"]}>
			<App />
		</MemoryRouter>
	);
	expect(component.find(Main)).toHaveLength(1);
});
```

https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Redirect.md#from-string 를 참조하여 주세요.

마지막

```jsx
it("should render 404 page with wrong address", () => {
	const component = mount(
		<MemoryRouter initialEntries={["/TAzzang"]}>
			<App />
		</MemoryRouter>
	);
	expect(component.contains(<div>404 Not Found</div>)).toBe(true);
});
```

의 해결법은 https://reacttraining.com/react-router/web/example/no-match 를 참조하세요.

## Main.test.js

`yarn test Main.test.js --watchAll=false`

App.test.js와 같은 내용이 나옵니다.

## Profile.test.js

`yarn test Profile.test.js --watchAll=false`

이 경우에는, 코드는 다 작성되어 있습니다. 그러나, 코드의 사소한 오류로 인하여
`it ('should handle username changes'`나 `it ('should handle birthday changes'`
에서 state가 바뀌지 않음을 확인하실 수 있습니다. 코드를 적절히 수정하여 주세요.

끝으로, 이번에는 직접 테스트를 작성해보도록 하겠습니다.

```
  it ('should handle display link with username & birthday has been entered', () => {
    //TODO
    expect(true).toBe(false);
  });
```

기존에 있는 expect를 삭제해주세요. 현재 Profile 컴포넌트는

```jsx
{
	username && birthday && <Link to={"/fortune/" + username + "&" + birthday}>show my fortune</Link>;
}
```

처럼 "/fortune"이라는 주소에 두 가지 파라미터를 넘겨주는 `Link`를 갖고 있습니다.
(App.js에서 `<Route path="/fortune/:name&:birthday" component={Fortune} />`로 Fortune에 두 가지 파라미터를 받을 수 있게 해주었구요.)
그러나, 빈 파라미터로 링크를 호출하는 일이 없도록 username과 birthday가 값이 있을 때 `Link`가 렌더링 되게 해두었습니다.
테스트에서는 이 조건부 렌더링을 검사해보고자 합니다.

`should handle username changes`를 참조하여 username과 birthday를 둘 다 바꿔주었을 때, component에서 "Link"를 찾을 수 있으면 되겠습니다.

</details>
