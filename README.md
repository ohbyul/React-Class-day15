# day 15 / 16 / 17

## day 15 [12 /23]
```
yarn add sass 
yarn add styled-components
yarn add styled-reset
yarn add axios
yarn add react-masonry-css
```
import axios from 'axios'

### Test1.js
axios / async / fetch 사용법
```
    Ajax : 서버로부터 새로고침 없이 요청할수 있게 도와줌
           서버로 네트워크 요청을 보내고 응답을 받을수 있도록 해줌 
    1. jQuery  $.ajax()
    2. js - fetch() 
    3. axios 설치 - axios.get()
    형식) fetch()  : json가져오면 json 그대로 가져옴 
    fetch('주소',옵션)
    .then( 콜백 ) 응답완료
    .catch( 콜백 ) 응답실패
    
    형식) axios.get() -> json 가져오면 객체로 변환해서 가져옴 
    axios.get('주소', 옵션) 
    .then( 콜백 ) 응답완료
    .catch( 콜백 ) 응답실패
    useEffect( () => {
        외부파일 가져오기 
    },[])
```
### Test2.js
인풋박스에 정보 받아서 정보 검색

## day 16 [12 /28]
### Test3.js / Test4.js
axios 사용 및 로딩 에러 처리
### Test5.js
검색어 받아서 JSON 정보 호출
```
https://hn.algolia.com/api/v1/search?query=검색어
```
### Test6.js
styled-components /newsapi 사용
