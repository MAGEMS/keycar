const Social = () => {
  const socialContent = [
    { id: 1, icon: "icon-facebook", link: "https://www.facebook.com/KeyCarRentalIceland/" },
    { id: 2, icon: "icon-twitter", link: "https://twitter.com/keycarrentaliceland" },
    { id: 3, icon: "icon-instagram", link: "https://www.instagram.com/keycarrentaliceland/" },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <i className={`${item.icon} text-14`} />
        </a>
      ))}
    </>
  );
};

export default Social;
