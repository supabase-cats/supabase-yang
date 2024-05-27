# Supabse 공부를 위한 repository

## 사용 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white">
<img src="https://img.shields.io/badge/emotion-hotpink?style=for-the-badge&logo=emotion&logoColor=white">
<img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white">

## 개인 목표

Vitest를 이용하여 TDD기반으로 supabase를 설계하여 속도보다 코드품질 및 유지보수성을 향상할 수 있도록 구현하고 emotion을 이용하여 스타일링의 폭을 넓히고 싶습니다.

스터디에서는 vitest및 emotion은 따로 설명하지 않고 오직 supabase만 집중하여 인증, 데이터베이스, 스토리지 등 기능을 활용하여 프론트엔드 개발에 집중할 수 있도록 설계하고자 합니다.

## 폴더 구조

📦supabase
┣ 📂src
┃ ┣ 📂assets
┃ ┣ 📂components  
┃ ┃ ┗ 📂Greet
┃ ┣ 📂pages
┃ ┃ ┗ 📂Home
┃ ┃ ┃ ┣ 📜index.tsx
┃ ┃ ┃ ┗ 📜style.ts
┃ ┣ 📜App.tsx
┃ ┣ 📜index.css
┃ ┣ 📜main.tsx
┃ ┣ 📜Router.tsx createBrowserRouter 분리
┃ ┗ 📜vite-env.d.ts
┣ 📂tests
┃ ┣ 📂components vitest
┃ ┗ 📜setup.ts vitest setup 추가
┣ 📜.eslintrc.cjs
┣ 📜.gitignore
┣ 📜index.html
┣ 📜package-lock.json
┣ 📜package.json
┣ 📜README.md
┣ 📜tsconfig.json emotion 세팅 추가
┣ 📜tsconfig.node.json
┣ 📜vite.config.ts emotion 세팅 추가
┗ 📜vitest.config.ts vitest 세팅
