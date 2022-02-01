import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        Copyright ⓒ {year} with ❤️ by
        <a href="http://zaheerkhan.online">Zaheer Khan</a>
      </p>
    </footer>
  );
}

export default Footer;
