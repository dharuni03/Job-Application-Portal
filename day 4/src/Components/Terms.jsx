import '../Style/Terms.css'; 


const Terms = () => {
  return (
    <main className="header-offset content-wrapper about-wrapper">
      <div className="terms-container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <section className="terms-title">
              <h1>Terms &amp; Conditions</h1>
              <hr />
            </section>

            <div className="terms-body">
              <h4>
                <strong>
                  Welcome to The Main Label. Please review the following basic terms that govern your use of, and purchase
                  of, products from our site. Please note that your use of our site constitutes your agreement to follow
                  and be bound by those terms.
                </strong>
              </h4>
              <hr />
              <h3>General</h3>
              <p>
                By using our website, you agree to the Terms of Use. We may change or update these terms so please check
                this page regularly. We do not represent or warrant that the information on our web site is accurate,
                complete, or current. This includes pricing and availability information. We reserve the right to correct
                any errors or omissions, and to change or update information at any time without giving prior notice.
              </p>
              <hr />
              <h3>Correction of Errors and Inaccuracies</h3>
              <p>
                The information on the site may contain typographical errors or inaccuracies and may not be complete or
                current. The Main Label therefore reserves the right to correct any errors, inaccuracies or omissions and
                to change or update information at any time with or without prior notice (including after you have
                submitted your order). Please note that such errors, inaccuracies or omissions may relate to product
                description, pricing, product availability, or otherwise.
              </p>
              <hr />
              {/* Other sections... */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Terms;
