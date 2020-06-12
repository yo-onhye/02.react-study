# 숙제 2

## 조교를 도와주세요

주말에 심심했던 조교는 카드 뒤집기 게임을 만들어서 놀기로 했습니다.

코드는 거의 완성했는데(https://github.com/taehioum/memory-game-skeleton), React의 컴포넌트 간 정보 교환 부분을 몰라서 완성을 못했습니다.
조교를 도와 skeleton 코드의 `TODO`를 수정하여 뒤집기 게임을 완성해주세요.

http://askat.me/ 처럼 동작하면 됩니다.

카드 뒤집기 게임의 규칙은 다음과 같습니다.

- 카드중에는 같은 문양을 갖는 카드가 2장씩 있으며, 카드 2장을 앞으로 뒤집었을 때 같은 문양이면 `Score += 2`,
  다른 모양이라면 다시 뒤로 뒤집힙니다. 이는 `App.js`의 `same_cards`에서 바꿀 수 있습니다.

- 문양은 `0123456789ABCDEF`로 총 16가지이며, 이는 `App.js`의 `initGame`의 `pool`에서 바꿀 수 있습니다.

- 이미 오픈 된 카드는 클릭 할 수 없습니다.

## 상세

![image](https://user-images.githubusercontent.com/5348027/83353533-377f6200-a38e-11ea-9522-e5836a6ab745.png)

프로젝트의 구조입니다. 강의 시간에 했던 TodoList와 비슷한 구조입니다.

`App.js`는 카드 문양들의 `list`와, `onToggle`을 `Grid.js`에 내려주고, `Grid.js`는 `.map()`으로 각각을 `Card`에 다시 내려주는 방식입니다.

주의할 점이 하나 있습니다. 강의 시간에는 `App.js`에서 `onToggle`에 `handleToggle()`하나만을 호출했지만,
이 프로젝트에서는 Card를 클릭하였을 때, 그 카드를 `toggle`하는 것과 함께, 넘긴 카드를 임시로 저장하는 `App.js`의 `tempOpen()`이 호출되어야 합니다.
`handleToggle()`에서 호출해도 되겠지만, 한 가지 함수는 한 가지 일만 하는 것이 좋겠죠. 이 부분을 염두에 두고 개발해주시면 될 것 같습니다.

## 보너스

- `App.js`의 상단에 정의된 값들을 이것저것 바꾸어보세요. 카드가 엄청 많아졌을 때, 렌더링의 최적화를 수행해보세요.

## 제출

https://github.com/taehioum/memory-game-skeleton 를 포크 한 후에,
![image](https://user-images.githubusercontent.com/5348027/83353232-00a84c80-a38c-11ea-9e07-6f614a2880cd.png)

터미널에서

```bash
git clone https://github.com/{깃헙유저명}/memory-game-skeleton hw2
cd hw2
```

한 후에, `TODO`가 적혀있는 부분을 수정하여 주세요.
완성하셨다면 깃 저장소링크를 보내주시면 됩니다.

## 힌트

- 카드는 `<div>` 보다는 `<button>`으로 구현하는 것이 편합니다. `<button>`의 disabled 속성을 활용하여 이미 뒤집힌 경우 클릭할 수 없게 만들 수 있기 때문입니다.
- 자바스크립트의 난독화를 수행하지 않았기 때문에, http://askat.me/ 의 소스코드를 보는 방법이 있습니다.
  막히는 부분이 있다면 그 방법을 이용하셔도 좋습니다.

- handleToggle이 두 가지 함수를 호출하게끔 하려면, (x, y) => {...(); ...();} 같은 방식을 이용하시면 됩니다.
