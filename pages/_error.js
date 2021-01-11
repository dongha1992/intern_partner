import Link from 'next/Link';

const Error = ({ statusCode }) => {
  return (
    <div style={{ textAlign: 'center', paddingTop: 100, fontSize: 40 }}>
      {statusCode ? `Sorry! ${statusCode} error` : 'Sorry! can not found page'}
      <br />
      <Link href={'/'}>
        <a>go back</a>
      </Link>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  if (statusCode >= 500 && statusCode < 600) {
    res.writeHead(302, {
      Location: '/error',
    });
    res.end();
  }

  return { statusCode };
};

export default Error;
