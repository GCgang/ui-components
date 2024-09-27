# [ UI요소 만들기]

## 디렉토리 구조

- `app`: app 전반에 대한 기본 view 제공
  - `[...item]/page.tsx`: `/[...item]` route의 page view. `routes`의 `key`에 매칭된 컴포넌트를 렌더링.
  - `layout.tsx`: 기본적인 html 구성
  - `page.tsx`: `/` route의 page view. `/README.md`를 보여줍니다.
  - `global.scss`: app 전반의 style
  - `gnb.tsx`: 좌측 메뉴 컴포넌트
- `components`
  - `vanillaWrapper.ts`: 독립적인 VanillaJS 환경의 wrapper 컴포넌트
- `routes.ts`: route 구성

## Getting Started

- 다운로드 받은 파일의 압축을 해제하고, 터미널에서 해당 폴더로 이동합니다.

```bash
cd uiComponents
```

- npm module 설치를 진행합니다.

```bash
npm install
# or
pnpm install
# or
yarn
```

- 개발 서버를 실행합니다.

```bash
npm run dev
# or
pnpm run dev
# or
yarn dev
```

- 브라우저에서 [http://localhost:3000](http://localhost:3000)에 접속하여 결과를 확인합니다.

## 🔗 Link

[UI 요소 만들기 Part 1](https://www.inflearn.com/course/react-vanillajs-ui%EC%9A%94%EC%86%8C%EB%A7%8C%EB%93%A4%EA%B8%B0-part1/dashboard)

[UI 요소 만들기 Part 2](https://www.inflearn.com/course/react-vanillajs-ui%EC%9A%94%EC%86%8C-%EC%A7%81%EC%A0%91%EB%A7%8C%EB%93%A4%EA%B8%B0-part2)
