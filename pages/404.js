import Link from 'next/Link';

const Error404 = () => {
  return (
    <div style={{ textAlign: 'center', paddingTop: 100, fontSize: 40 }}>
      404 Error!
      <br />
      <Link href={'/'}>
        <a>go back</a>
      </Link>
    </div>
  );
};

export default Error404;
