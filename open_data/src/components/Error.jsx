const Error = ({ error_message }) => {
  return (
    <div className="alert alert-danger text-center" role="alert">
      {error_message}
    </div>
  );
};

export default Error;
