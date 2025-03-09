import Image from "next/image";
import Link from "next/link";

export default function InstructorHeroCardOne({ instructor }) {
  return (
    <section className="Insthero__area pt-130 pb-100">
      <div className="container">
        <div className="insthero__wrap">
          <div className="insthero__top">
            {instructor.image && (
              <div className="insthero__thumb-wrap">
                <Image
                  className="insthero__thumb"
                  src={instructor.image}
                  alt="Post"
                />
              </div>
            )}
            {instructor.title && (
              <h2 className="insthero__name">
                <span>{instructor.title.sliceOne}</span>&nbsp;
                {instructor.title.sliceTwo}
              </h2>
            )}
            {instructor.designation && (
              <p className="insthero__designation">{instructor.designation}</p>
            )}
            <p className="insthero__review d-flex align-items-center justify-content-center gap-2">
              {instructor.review.image && (
                <Image src={instructor.review.image} alt="Icon" />
              )}
              ({instructor.review.count ?? 0} Reviews)
            </p>
            {instructor.socials && (
              <ul className="insthero__social-list d-flex align-items-center justify-content-center gap-2">
                {instructor.socials.map((social, index) => (
                  <li key={index} className="insthero__social-item">
                    <Link className="insthero__social-link" href={social.link}>
                      <Image
                        className="social-icon"
                        src={social.icon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <div className="insthero__btn-wrap d-flex align-items-center gap-2 justify-content-center">
              {instructor.follow.text && (
                <Link
                  className="btn-follow btn-hover-shadow"
                  href={instructor.follow.link}
                >
                  {instructor.follow.text}
                </Link>
              )}
              {instructor.message.text && (
                <Link className="btn-message" href={instructor.message.link}>
                  {instructor.message.text}
                </Link>
              )}
            </div>
          </div>
          <div className="insthero__btm">
            <div className="insthero__btm-left">
              {instructor.name && (
                <h3 className="insthero__title">{instructor.name}</h3>
              )}
            </div>
            <div className="insthero__btm-right">
              {instructor.description.sliceOne && (
                <p className="insthero__content">
                  {instructor.description.sliceOne}
                </p>
              )}
              {instructor.description.sliceTwo && (
                <p className="insthero__content">
                  {instructor.description.sliceTwo}
                </p>
              )}
              {instructor.contact.title && (
                <h4 className="insthero__contact">
                  {instructor.contact.title}
                </h4>
              )}
              {instructor.contact.items &&
                instructor.contact.items.length > 0 && (
                  <ul className="insthero__info">
                    {instructor.contact.items.map((item, index) => (
                      <li key={index} className="insthero__info-item">
                        <Image src={item.image} alt="Icon" />
                        <Link className="insthero__info-link" href={item.image}>
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
