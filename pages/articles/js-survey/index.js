function JSSurvey(props) {
  return (
    <div>
      <h1>2020 JS Survey</h1>
      <p>
        대부분의 응답자들은 설문 조사에 언급된 대부분의 자바스크립트 기능에 대해 알고 있었지만, 여전히 많은 응답자들이
        대부분의 기능을 실제로 사용하지 못하고 있었습니다. 구문, 언어, 자료구조, 브라우저 API, 기타 기능 순으로 어떤
        것들이 있는지 알아보자.
      </p>
      <ul>
        <li>
          <a>Syntax</a>
        </li>
        <li>
          <a>Data Structure</a>
        </li>
        <li>
          <a>Browser APIs</a>
        </li>
        <li>
          <a>Other Features</a>
        </li>
      </ul>
      <a href="/articles">&lt; Back To List</a>
    </div>
  );
}

export default JSSurvey;
