import Image from "next/image";
import Link from "next/link";

export default function InstructorDetailCardOne({ instructor }) {
  return (
    <div className="postDetails__author">
      {instructor.image && <Image src={instructor.image} alt="Author" />}
      {instructor.name && (
        <h5 className="postDetails__author-name">{instructor.name}</h5>
      )}
      {instructor.designation && (
        <p className="postDetails__autor-designation">
          {instructor.designation}
        </p>
      )}
      {instructor.description && (
        <p className="postDetails__author-bio">{instructor.description}</p>
      )}
      {instructor.socials && instructor.socials.length > 0 && (
        <ul className="postDetails__author-social">
          {instructor.socials.map((social, index) => (
            <li key={index}>
              <Link
                className="postDetails__author-socail-link"
                href={social.link}
              >
                <Image className="social-icon" src={social.icon} alt="Icon" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
