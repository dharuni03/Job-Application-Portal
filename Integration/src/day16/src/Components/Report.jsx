import '../Style/Terms.css'; 


const Terms = () => {
  return (
    <main className="header-offset content-wrapper about-wrapper">
      <div className="terms-container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <section className="terms-title">
              <h1>Report &amp; Issue</h1>
              <hr />
            </section>

            <div className="terms-body">
              <h4>
                <strong>
                Report Issue Form - JobSeekerConnect

Please use this form to report any issues or problems you encounter while using JobSeekerConnect. Your feedback is crucial in improving our platform and providing you with a better experience.

**Your Name:**
- [Text Field]

**Your Email Address:**
- [Text Field]

**Subject:**
- [Text Field]

**Description of the Issue:**
- [Text Area]

**Severity:**
- [Dropdown: Low, Medium, High]

**Steps to Reproduce the Issue:**
- [Text Area]

**Attachments:**
- [File Upload]

**Additional Comments:**
- [Text Area]

**Instructions:**
- Please provide detailed information about the issue you encountered.
- If applicable, include the steps you took before encountering the problem.
- Attach screenshots, error messages, or any files that may help us understand the issue better.
- Indicate the severity level based on the impact of the issue (Low, Medium, High).

By submitting this form, you agree that the information provided is accurate and may be used by our support team to investigate and resolve the reported issue.

Thank you for helping us improve JobSeekerConnect!

[Submit Button]

**Contact Information:**
If you have any additional questions or need further assistance, you can reach out to our support team:
- Email: support@jobseekerconnect.com
- Phone: [Your Phone Number]

**JobSeekerConnect Support Team**






                </strong>
              </h4>
              <hr />
              <p>
                By using our website, you agree to the Terms of Use. We may change or update these terms so please check
                this page regularly. We do not represent or warrant that the information on our web site is accurate,
                complete, or current. This includes pricing and availability information. We reserve the right to correct
                any errors or omissions, and to change or update information at any time without giving prior notice.
              </p>
              <hr />
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
