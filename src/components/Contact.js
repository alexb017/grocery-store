export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-content">
        <h1>
          Love to hear from you, <br></br>Get in touch 👋
        </h1>
        <div className="contact-content-form">
          <form className="contact-form">
            <div className="form-name">
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-email">
              <label htmlFor="email">Your email</label>
              <input
                type="text"
                id="email"
                className="form-input"
                placeholder="Your email"
                required
              />
            </div>
            <div className="form-name">
              <label htmlFor="message">How can we help?</label>
              <textarea
                type="text"
                rows="5"
                cols="33"
                className="form-input"
                id="message"
                placeholder="Tell us a little about..."
                required
              />
            </div>
            <div className="form-btn">
              <input type="submit" value="Send →" className="form-btn-submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
