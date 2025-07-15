// Express 모듈을 불러옵니다.
const express = require("express");

// path 모듈을 불러옵니다. (경로 처리를 위해 사용)
const path = require("path");

// Express 애플리케이션을 생성합니다.
const app = express();

// 사용할 포트 번호를 지정합니다.
const PORT = 3000;

// 정적 파일(HTML, CSS, JS 등)을 제공할 디렉토리를 설정합니다.
app.use(express.static(path.join(__dirname, "..")));

// 모든 GET 요청에 대해 index.html 파일을 응답으로 보냅니다. (SPA 라우팅 지원)
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

// 서버를 지정한 포트에서 실행합니다.
app.listen(PORT, () => {
  console.log("START SERVER");
});
