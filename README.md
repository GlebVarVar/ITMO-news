## О проекте
- Тестовое задание для стражировки в ИТМО
- Приложение создано на основе npx create next-app

Развернуть сервер для разрабоки:
```bash
npm run dev
```

Скомпилировать продакшен версию:
```bash
npm run build
```

Запустить продакшен билд:
```bash
npm start
```

Запустить линтер:
```bash
npm run lint
```

Запустить автоматический фикс ошибок линтера:
```bash
npm run lint:fix
```

Запустить проверку форматирования:
```bash
npm run format
```

Отформатировать проект:
```bash
npm run format:fix
```

### Структура проекта
```
itmo
├─ .dockerignore
├─ .editorconfig
├─ .eslintrc.json
├─ .prettierignore
├─ .prettierrc.json
├─ Dockerfile
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ Down.svg
│  ├─ favicon.ico
│  ├─ logo.svg
│  ├─ test.png
│  └─ vercel.svg
├─ README.md
├─ src
│  ├─ assets
│  │  ├─ fonts
│  │  │  ├─ Muller
│  │  │  └─ OpenSans
│  │  ├─ img
│  │  │  ├─ eng.svg
│  │  │  └─ rus.svg
│  │  └─ styles
│  │     ├─ 404.module.scss
│  │     ├─ fonts.scss
│  │     ├─ Home.module.scss
│  │     ├─ index.scss
│  │     ├─ Layout
│  │     │  └─ Layout.module.scss
│  │     ├─ NewsCard.module.scss
│  │     ├─ NewsItem.module.scss
│  │     └─ reset.scss
│  ├─ components
│  │  ├─ index.tsx
│  │  ├─ NewsCard.tsx
│  │  └─ NewsCardSkeleton.tsx
│  ├─ modules
│  │  ├─ 404
│  │  │  ├─ components
│  │  │  │  └─ Error.tsx
│  │  │  └─ index.tsx
│  │  ├─ Layout
│  │  │  ├─ components
│  │  │  │  ├─ ChooseLanguageDropdownItem.tsx
│  │  │  │  └─ SelectedLanguage.tsx
│  │  │  ├─ Footer.tsx
│  │  │  ├─ Header.tsx
│  │  │  └─ index.tsx
│  │  ├─ NewsItem
│  │  │  ├─ components
│  │  │  │  └─ NewsItem.tsx
│  │  │  └─ index.tsx
│  │  └─ NewsList
│  │     ├─ components
│  │     │  └─ NewsList.tsx
│  │     └─ index.tsx
│  ├─ pages
│  │  ├─ 404.tsx
│  │  ├─ index.tsx
│  │  ├─ [id].tsx
│  │  └─ _app.tsx
│  ├─ store
│  │  ├─ hooks.tsx
│  │  ├─ index.tsx
│  │  └─ slices
│  │     ├─ languageSlice.tsx
│  │     └─ newsSlice.tsx
│  └─ UI
│     ├─ Chevron.tsx
│     ├─ CountryIcon.tsx
│     └─ Logo.tsx
└─ tsconfig.json

```

### Created by:
- Костров Глеб Юрьевич
- БГТУ "ВОЕНМЕХ"
- Информационные системы и технологии
- 2 курс
- Сотрудник "ЦРиВ" (Центр разработки и внедрения)
- anegada@mail.ru / [@GlebVarVar](https://t.me/GlebVarVar) / 89052637755