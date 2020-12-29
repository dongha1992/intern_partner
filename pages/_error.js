const Error = ({ statusCode }) => {
  return (
    <div style={{ textAlign: 'center', paddingTop: 100, fontSize: 40 }}>
      {statusCode ? `Sorry! ${statusCode} error` : 'Sorry! can not found page'}
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
