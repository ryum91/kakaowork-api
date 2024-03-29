# kakaowork-api

[카카오워크 Web API](https://docs.kakaoi.ai/kakao_work/webapireference/) 를 편리하게 사용할 수 있는 Node Library 입니다.

## 사용방법

### 설치

npm 으로 설치할 수 있습니다.

```
npm install kakaowork-api
```

### 환경변수 설정

`KAKAOWORK_BOT_API_KEY` 이름으로 카카오워크 관리자 페이지에서 발급받은 API KEY를 환경 변수에 등록하세요.

```
Window) set KAKAOWORK_BOT_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxx
Linux) export KAKAOWORK_BOT_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxx
```

### API 사용

`kakaowork-api/fetches` 하위에 서브 디렉토리 구조로 API 를 Import 하여 사용하실 수 있습니다.

```js
import { ... } from 'kakaowork-api/fetches/users';
import { ... } from 'kakaowork-api/fetches/conversations';
import { ... } from 'kakaowork-api/fetches/messages';
import { ... } from 'kakaowork-api/fetches/departments';
import { ... } from 'kakaowork-api/fetches/spaces';
import { ... } from 'kakaowork-api/fetches/bots';
```

### MessageBlock Generator 사용

[Message를 보낼 때 사용되는 Block](https://docs.kakaoi.ai/kakao_work/blockkit/)을 손쉽게 사용할 수 있도록 Generator 유틸 함수를 제공합니다.

```js
import { textBlock, buttonBlock, ... } from 'kakaowork-api/blocks';
```

실제 Message를 보낼 때는 다음과 같이 사용할 수 있습니다.

```js
import { fetchMessageSend } from 'kakaowork-api/fetches/messages';
import { textBlock, buttonBlock } from 'kakaowork-api/blocks';

fetchMessageSend(conversationId, {
  text: '전송할 텍스트',
  blocks: [
    textBlock('텍스트블록'),
    buttonBlock({
      text: 'Button1',
      style: 'primary',
      action_type: 'open_inapp_browser',
      value: 'value'
    })
  ]
});
```

> TypeScript를 지원하며, 필요한 타입들은 전부 정의되어 있습니다.

### Reactive

[카카오워크 Reactive](https://docs.kakaoi.ai/kakao_work/webapireference/reactive/) 는 직접 호출하는 방식이 아닌,
카카오워크 내부 서버에서 호출하면 응답하는 방식으로 되어있습니다. 따라서 request API는 제공되지 않습니다.

하지만 Block Generator 함수는 제공되어, Modal Block을 반환할 때는 사용할 수 있습니다.

```js
import { labelBlock, inputBlock, selectBlock } from 'kakaowork-api/blocks';
```

## 주의사항

카카오워크에서 공식적으로 제공하는 라이브러리가 아니며, 추후 카카오워크 API가 변경되면 정상적으로 동작하지 않을 수도 있습니다.

## License

MIT
