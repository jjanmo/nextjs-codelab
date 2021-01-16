import Link from 'next/link';
import axios from 'axios';

function GetUUID(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.uuid}</h3>
      <Link href="/">
        <a>Go To Home</a>
      </Link>
    </div>
  );
}

GetUUID.getInitialProps = async () => {
  const LOCAL_URL = 'http://localhost:1234';
  const { data } = await axios(`${LOCAL_URL}/api/uuid`);

  return {
    title: 'UUID',
    uuid: data.uuid,
  };
};

export default GetUUID;
