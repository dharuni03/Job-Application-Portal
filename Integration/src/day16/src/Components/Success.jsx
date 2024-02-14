import '../Style/Success.css';

const Success = () => {
  return (
    <div className="sc-cn">
      <div className="sc-card">
        <div className="sc-icon-container">
          <i className="sc-icon">✓</i>
        </div>
        <h1 className="sc-title">Success</h1>
        <p className="sc-message">We received your form<br/> we will be in touch shortly!</p>
      </div>
    </div>
  );
};

export default Success;
