# day 15 / 16 / 17 / 18
참고 사이트 및 링크
```
json 제공사이트
https://jsonplaceholder.typicode.com
https://jsonplaceholder.typicode.com/posts

검색
https://hn.algolia.com/
http://hn.algolia.com/api/v1/search?query=검색어

뉴스
https://newsapi.org/register
https://newsapi.org/s/south-korea-news-api

reset 설치
https://www.npmjs.com/package/styled-reset

pixabay
https://pixabay.com/api/docs/

pinterest 유형 메이슨리 
https://www.npmjs.com/package/react-masonry-css
```
## 😎 day 15 [12 /23]
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

## 😎 day 16 [12 /28]
### Test3.js / Test4.js
axios 사용 및 로딩 에러 처리
### Test5.js
검색어 받아서 JSON 정보 호출
```
https://hn.algolia.com/api/v1/search?query=검색어
```
### Test6.js
styled-components /newsapi 사용

### sample 폴더
갤러리pixabay 사용하여, 작은 프로젝트 만들기 (day 17 연결)

## 😎 day 17 
### [components_day17] - Test1.js / Test1paging.js
```
페이징 처리 작은 프로젝트
```
### [components_day17] - Test2.js - Test4.js
useMemo 
```
    성능 최적화를 위해 사용
    useMemo / useCallback : 메모 이퀘이션
    useMemo :  return 값을 기억
    useCallback : 함수 를 기억 (함수 자체를 기억)
    useMemo : 잘쓰기 쉽지 않다 (많이 사용 안한다.)
             + context 사용한다
    
    useMemo( () => {} , deps)
    useMemo(함수, 의존성)
    useMemo(함수, [])
    useMemo(함수, [바뀌는값])
    
    useCallback : 함수 를 기억한다 - 모든 함수에 처리하는 것이 아니다 95% 처리한다.
    useCallback( () => {} , deps)
    useCallback(함수, 의존성)
    useCallback(함수, [])
    useCallback(함수, [바뀌는값])
```

## 😎 day 18
### [components_day17] - Test5.js - Test6.js
useMemo 활용
### [components_day17] - Test7.js
useCallback 사용
### [components_day17] - Test8.js
useMemo / useCallback 
같이 사용
### [components_day17] - Test9.js
React.memo 사용
### [components_day17] - Test10.js
React.memo(컴포넌트) / useCallback 연결 
