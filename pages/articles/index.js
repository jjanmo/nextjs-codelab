import Link from 'next/link';

function Articles(props) {
  return (
    <div>
      <h1>Articles</h1>
      <ul>
        <li>
          <Link href="/articles/js-survey">
            <a>2020 JS Survey</a>
          </Link>
        </li>
      </ul>
      <a href="/">Go To Home</a>
    </div>
  );
}

export default Articles;
