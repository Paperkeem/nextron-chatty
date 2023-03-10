# ๐ป Chatting Desktop App
## [๐ ์ดํ๋ฆฌ์ผ์ด์ ์ค์น ํ์ผ ์ฃผ์](https://drive.google.com/file/d/18x0_UbnMEXArY6vtA2_knRuqfL19Kxu8/view?usp=sharing)

<div align="center">
   <img width="500px" src="https://user-images.githubusercontent.com/107424974/217604421-2cdf8c7b-5e12-4f46-877b-951068988226.gif"/>
   <br />
   <img width="500px" src="https://user-images.githubusercontent.com/107424974/217604436-a235bf68-b29f-4b46-a974-f1a8e75d01aa.gif"/>
   <br />
   <img width="500px" src="https://user-images.githubusercontent.com/107424974/217604655-c7f347ab-51b4-4bd0-bf91-ac91365287b9.gif"/>
<br />

##### ๐ ๊ตฌํ ์ผ์  : 2023.02.06 - 2023.02.22
  
</div>

</br>

## ๋ชฉ์ฐจ

1. [ํ๋ก์ ํธ ์คํ ๋ฐฉ๋ฒ](#ํ๋ก์ ํธ-์คํ-๋ฐฉ๋ฒ)
2. [๊ตฌํ์ฌํญ](#๊ตฌํ์ฌํญ)
3. [ํ๊ณ ](#ํ๊ณ )

</br>

## ํ๋ก์ ํธ ์คํ ๋ฐฉ๋ฒ

<br>

1. ์์กด ํจํค์ง๋ฅผ ์ค์นํฉ๋๋ค.
```bash
npm install
```

2. ํ์ด์ด ๋ฒ ์ด์ค ์ฌ์ฉ์ ์ํด์ renderer ํด๋ ํ์์ .env ํ์ผ์ ์์ฑํ๊ณ  ๋ค์๊ณผ ๊ฐ์ ๋ด์ฉ์ ์ถ๊ฐํฉ๋๋ค.
```bash
NEXT_PUBLIC_API=
NEXT_PUBLIC_FIRE_DOMAIN=
NEXT_PUBLIC_FIRE_DATABASE=
NEXT_PUBLIC_FIRE_PROJECT_ID=
```

3. ์๋ฒ๋ฅผ ์คํํฉ๋๋ค.
```bash
npm run dev
```

etc. chatty APP์์ ์ด์ฉํ  ์ ์๋ ํ์คํธ ๊ณ์  ์ ๋ณด์๋๋ค.
```bash
email=admin@gmail.com / password=1234567
email=test@gmail.com / password=1234567
email=ahha@gmail.com / password=1234567
```

<br>

## ๊ธฐ์ ์คํ

> React, TypeScript, Next.js, Electron, firebase, react-query, ant-design

<br>


## ๊ตฌํ์ฌํญ

- [x] ํ์๊ฐ์
  <br />
- [x] ๋ก๊ทธ์ธ
  <br />
- [x] ์ ์  ๋ชฉ๋ก
  <br />
- [x] 1:1 ์ฑํ
  <br />
- [x] ๊ทธ๋ฃน์ฑํ
  <br />

#### 1. firebase authentication์ ์ด์ฉํ ํ์๊ฐ์, ๋ก๊ทธ์ธ

https://github.com/Paperkeem/nextron-chatty/blob/9e0d467763a7ea841c3608d2ed60f12b9f39747c/renderer/src/apis/firebase.tsx#L24-L52

- ํ์ ๊ฐ์ ์, `updateProfile`ํจ์๋ฅผ ์ฒด์ด๋ ํด firebase user ์ ๋ณด์ ๋ด๊ฐ ๊ธฐ์ํ ๋ณ๋ช์ `displayName`์ผ๋ก ์ ์ฅ
- ์๋ฌ ๋ฐ์ ์, `throw new Error`๋ก ์๋ฌ๋ฅผ ๋๊ฒจ ๋ก๊ทธ์ธ ํ์ด์ง์์ ์ฒ๋ฆฌ

https://github.com/Paperkeem/nextron-chatty/blob/9e0d467763a7ea841c3608d2ed60f12b9f39747c/renderer/src/apis/firebase.tsx#L59-L70
https://github.com/Paperkeem/nextron-chatty/blob/9e0d467763a7ea841c3608d2ed60f12b9f39747c/renderer/src/context/AuthContext.tsx#L11-L32

- ๋ก๊ทธ์ธ ์ firebase์ `onAuthStateChanged` ํจ์๋ฅผ ์ด์ฉํด current user ์ ๋ณด๋ฅผ ๋ฐ์์ค๋๋ก ๊ตฌํ
- ์๋ฌ๋ฅผ ๋๋นํ์ฌ ์ ์  ์ ๋ณด๋ฅผ localStorage์ ์ด์ค์ผ๋ก ์ ์ฅ
- context api๋ฅผ ์ด์ฉํด ์ ์  ์ ๋ณด๋ฅผ ์ ์ญ์ผ๋ก ๊ด๋ฆฌ

#### 2. react-query๋ฅผ ์ด์ฉํด firebase api ํธ์ถ / refetchInterval ์ค์ ์ ํตํด ํด๋ง ๊ตฌํ

https://github.com/Paperkeem/nextron-chatty/blob/9e0d467763a7ea841c3608d2ed60f12b9f39747c/renderer/pages/chat/%5BroomId%5D.tsx#L17-L20
https://github.com/Paperkeem/nextron-chatty/blob/9e0d467763a7ea841c3608d2ed60f12b9f39747c/renderer/src/hooks/useChat.tsx#L11-L32

- react query์ `refetchInterval์ 1000`์ผ๋ก ์ค์ ํ์ฌ ์๋ฒ `polling`์ ๊ตฌํ
- ๊ฐ์ query key๋ฅผ ์ฐ๋ ํจ์๋ผ๋ฆฌ custom hook์ผ๋ก ๋ฌถ์ด ๊ด๋ฆฌ ์ฉ์ด์ฑ ์ฆ๋
- ๋ฉ์ธ์ง๋ฅผ ๋ณด๋ผ ์์๋ useMutation์ ์ด์ฉํด `์ฑํ๋ฐฉ ๋ฐ์ดํฐ ๋๊ธฐํ`๋ฅผ ๊ตฌํ

#### 3. ์ฑํ๋ฐฉ ๋ด ์ค๋ณต๋๋ ๋ก์ง์ custom hook์ผ๋ก ๋ง๋ค์ด ๊ด๋ฆฌ 

https://github.com/Paperkeem/nextron-chatty/blob/9e0d467763a7ea841c3608d2ed60f12b9f39747c/renderer/src/hooks/useMsg.tsx#L3-L20
https://github.com/Paperkeem/nextron-chatty/blob/9e0d467763a7ea841c3608d2ed60f12b9f39747c/renderer/src/hooks/useScroll.tsx#L3-L11

- 1:1 ์ฑํ๋ฐฉ๊ณผ ๊ทธ๋ฃน ์ฑํ๋ฐฉ์์ ๋์ผํ๊ฒ ์ฐ์ด๋ input event์ scroll ์ด๋ฒคํธ๋ฅผ custom hook์ผ๋ก ๊ด๋ฆฌ

https://github.com/Paperkeem/nextron-chatty/blob/9e0d467763a7ea841c3608d2ed60f12b9f39747c/renderer/pages/chat/%5BroomId%5D.tsx#L22-L27
https://github.com/Paperkeem/nextron-chatty/blob/fd23871bb2dc4ba26643cadeae30fd0662361b5a/renderer/pages/group/%5Bidx%5D.tsx#L22-L27

- useMutation ํจ์๋ฅผ callback์ผ๋ก ๋๊ธฐ๊ณ  obj๋ฅผ Value ๊ฐ์ผ๋ก ๋๊ฒจ ์ด์ฉ

