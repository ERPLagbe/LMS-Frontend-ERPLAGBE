import { contactOne as contact } from "@/data/contact";
import Image from "next/image";
import Link from "next/link";

export default function ContactFormOne() {
  return (
    <section className="contact__area pt-130 pb-130">
      <div className="container">
           {/* Google Map Embed */}
           <div className="map__container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14598.369601269525!2d90.435941!3d23.833089!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7045859e9bd%3A0xfcac26cdef011dac!2sJobayer%20Academy%20%7C%20Skill%20Development%20Training%20Center!5e0!3m2!1sen!2sbd!4v1728993061234!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0, width: "100%", height: "450px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* <!-- Form  --> */}
        {/* <div className="contact__form-wrap">
          <form action="/">
            {contact.form.title && (
              <h2 className="contact__title">{contact.form.title}</h2>
            )}
            <div className="contact__form-blockWrap">
              <div className="contact__form-block">
                <label for="name">পুরো নাম *</label>
                <input
                  type="text"
                  className="contact__input"
                  name="name"
                  id="name"
                  placeholder="Jonthon don"
                />
              </div>
              <div className="contact__form-block">
                <label for="email">ই-মেইল *</label>
                <input
                  type="email"
                  className="contact__input"
                  name="email"
                  id="email"
                  placeholder="info@skillhub.info"
                />
              </div>
              <div className="contact__form-block">
                <label for="phone">ফোন *</label>
                <input
                  type="text"
                  className="contact__input"
                  name="phone"
                  id="phone"
                  placeholder="(00) 123 456 789"
                />
              </div>
            </div>
            <div className="contact__form-block">
              <label for="message">বার্তা</label>
              <textarea
                className="contact__textarea"
                name="message"
                id="message"
                placeholder="Tell us more about project..."
                rows="4"
              ></textarea>
              <div className="contact__checkbox-wrap">
                <input
                  type="checkbox"
                  className="checkbox"
                  name="checkbox"
                  id="checkbox"
                  value="checkbox"
                />
                <label className="checkbox-label" for="checkbox">
                  Preserve my name, email, and website for future comments by
                  storing them in this browser.
                </label>
              </div>
            </div>
            <button type="submit" className="btn-sendMessage btn-hover-shadow">
              Send Message
            </button>
          </form>
        </div> */}
        <div className="contact__socail-wrap">
          {/* <!-- Item  --> */}
          <div className="contact__social-item">
            <div className="contact__social-iconWrap">
              <Image
                className="contact__socail-icon"
                src={contact.form.phoneIcon}
                alt="Icon"
              />
            </div>
            <div className="contact__social-content">
              <p className="contact__social-title">Call Us</p>
              <Link
                className="contact__social-subtitle"
                href={`tel:${contact.form.phoneNumber}`}
              >
                {contact.form.phoneNumber}
              </Link>
            </div>
          </div>
          {/* <!-- Item  --> */}
          <div className="contact__social-item">
            <div className="contact__social-iconWrap">
              <Image
                className="contact__socail-icon"
                src={contact.form.mailIcon}
                alt="Icon"
              />
            </div>
            <div className="contact__social-content">
              <p className="contact__social-title">Email</p>
              <Link
                className="contact__social-subtitle"
                href={`mailto:${contact.form.email}`}
              >
                {contact.form.email}
              </Link>
            </div>
          </div>
          {/* <!-- Item  --> */}
          <div className="contact__social-item">
            <div className="contact__social-iconWrap">
              <Image
                className="contact__socail-icon"
                src={contact.form.locationIcon}
                alt="Icon"
              />
            </div>
            <div className="contact__social-content">
              {contact.form.locationTitle && (
                <p className="contact__social-title">
                  {contact.form.locationTitle}
                </p>
              )}
              {contact.form.address && (
                <p className="contact__social-subtitle">
                  {contact.form.address}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
