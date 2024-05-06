const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Call Us",
      action: "tel:+(354)4197978",
      text: "+(354) 123 419 7978",
    },
    {
      id: 2,
      title: "Email Us",
      action: "mailto:info@keycarrental.is",
      text: "info@keycarrental.is",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mb-20" key={item.id}>
          <div className={"text-14"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-dark-1 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
