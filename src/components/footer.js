import React from "react";
function footer() {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li>
          <a href="https://github.com/Arryan-n" target="_blank">
            <i class="fa-brands fa-github"> </i>
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://www.linkedin.com/in/aryan-baliyan-758305156/"
            target="_blank"
          >
            {" "}
            <i class="fa-brands fa-linkedin"> </i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="mailto:ankushbaliyan142@gmail.com" target="_blank">
            <i class="fa-regular fa-envelope-open"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-brands fa-facebook"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default footer;
