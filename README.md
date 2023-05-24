# redux-counter-app

# cra

npx create-react-app redux-counter --template typescript

# install redux

npm intall redux --save

# redux-thunk

dispatch는 기본적으로 함수를 인자로 받는데,

redux thunk를 사용하면 아래처럼 함수를 dispath할 수 있습니다.

`dispath(fetchTodos())`

미들웨어에 thunk를 추가하면 됩니다.

`applyMiddleware(thunk, middleware)`

# redux-toolkit

npx create-react-app redux-toolkit --template redux-typescript
