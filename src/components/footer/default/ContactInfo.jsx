const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Call us",
      action: "tel:+3544197978",
      text: "+(354) 419 7978",
    },
    {
      id: 2,
      title: "Email us",
      action: "mailto:info@keycarrental.is",
      text: "info@keycarrental.is",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className="mt-30">
            <div className="text-14 mt-30">{item.title}</div>
            <a href="#" className="text-18 fw-500 mt-5">
              {item.text}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
