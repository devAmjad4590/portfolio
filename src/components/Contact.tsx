import BallIcon from "./BallIcons";
import { contact } from "./db";


function Contact() {
  return (
    <div id="contact" className="md:p-5 md:px-16 px-6 projects bg-[#121212] min-h-[60vh]">
      <h1 data-aos="zoom-in" data-aos-duration="100" className="md:text-5xl py-4 text-3xl text-white font-poppins font-bold md:my-6">
        Connect with me
      </h1>
      <div className="container mx-auto md:px-64 md:p-2 flex flex-wrap justify-center items-center gap-4 md:gap-9">
        {contact.map((contact, index) => (
          <BallIcon key={index} icon={contact.icon} delay={index * 150} />
        ))}
      </div>
    </div>
  );
}

export default Contact;
