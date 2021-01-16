# Next.JS

> Learn Next.JS 🚀

> with [Next.JS Official](https://nextjs.org/) & [Codelab Youtube Channel](https://www.youtube.com/channel/UC7SGsu80wfuTyQWo-PKatvg)

# Features

> Next.JS의 여러가지 특징에 대해서 알아보자

## Pages

- 넥스트에서의 pages의 디렉토리는 특별하다. pages 안의 디렉토리/파일 구조가 사이트에서의 url이 된다.

  ```
  pages 안에 article 디렉토리를 만들고 article 디렉토리 안에 first-article.js 라는 파일을 만든다면 어떻게 될까?
  ```

  > `http://localhost:PORT/articles/first-article` 이라는 url이 자동으로 생성되어 해당 컴퍼넌트가 출력된다.

- `index.js`라는 파일을 특정 디렉토리에서 생성한다면, 그 index.js 파일은 그 디렉토리를 대표하게 된다. 이 말은 index.js는 특정 디렉토리가 갖게되는 url을 대표하게 된다는 말과 같다.

  > 예를 들어서 articles 디렉토리 안에 index.js를 생성한다면, `http://localhost:PORT/articles` 접근하게 되면 index.js가 열리게 된다.
