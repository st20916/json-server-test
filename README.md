# JSON Server 실서버 배포
> **JSON Server** 를 어떻게 배포할까에 대한 프로젝트

## JSON Server 실행
1. root 에 **db.json** 파일이 존재
2. 실행은 `json-server --watch db.json --port 5000` 으로 실행
  - 단, port 번호는 프로젝트와 겹치지만 않으면 가능
  - 서버는 반드시, 실행되어 있어야 하는 상태

3. 배포 전 자신의 github `<repository>` 생성
4. 데이터 불러오는 URL에 localhost 대신 아래와 같이 사용

```js
// 아래는 예시
const url = 'https://my-json-server.typicode.com/st20916/json-server-test/board';
```

5. 그러고 배포하면 해당, 데이터 읽기 가능