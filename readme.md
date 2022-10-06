### ✏️ router 구현하기

- 해당 부분에서 `useRouter()`에서 정의한 path를 가져와서 넣어도 될 것이라 생각했지만, 이 경우 변경된 url이 반경되지 않기때문에 함수 안에서 새로 정의해주어야 했다.

```js
const changeLocation = () => {
	const path = window.location.pathname
	setCurrent(path)
}
```
