import React from 'react'
import { Link } from 'react-router-dom'
import "./faq.css"

const Faq = () => {
  return (
    <div className='faq'>
          
          <div className="accordion-list mt-3">
          <div className="faq-list">
  <ul>
    <li>
      <Link
        data-bs-toggle="collapse"
        className="collapsed a text-decoration-none"
        data-bs-target="#accordion-list-1"
      >
        <span>01</span> Non consectetur a erat nam at lectus urna duis?{" "}
        <i class="bi bi-plus icon-show"></i>
        <i class="bi bi-dash icon-close"></i>
      </Link>
      <div
        id="accordion-list-1"
        className="collapse show"
        data-bs-parent=".accordion-list"
      >
        <p>
          Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat
          lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla
          urna porttitor rhoncus dolor purus non.
        </p>
      </div>
    </li>
    <li>
      <Link
        data-bs-toggle="collapse"
        data-bs-target="#accordion-list-2 "
        className="collapsed a text-decoration-none"
      >
        <span>02</span> Feugiat scelerisque varius morbi enim nunc?{" "}
        <i class="bi bi-plus icon-show"></i>
        <i class="bi bi-dash icon-close"></i>
      </Link>
      <div
        id="accordion-list-2"
        className="collapse"
        data-bs-parent=".accordion-list"
      >
        <p>
          Dolor sit amet consectetur adipiscing elit pellentesque habitant
          morbi. Id interdum velit laoreet id donec ultrices. Fringilla
          phasellus faucibus scelerisque eleifend donec pretium. Est
          pellentesque elit ullamcorper dignissim. Mauris ultrices eros in
          cursus turpis massa tincidunt dui.
        </p>
      </div>
    </li>
    <li>
      <Link
        data-bs-toggle="collapse"
        data-bs-target="#accordion-list-3"
        className="collapsed a"
      >
        <span>03</span> Dolor sit amet consectetur adipiscing elit?{" "}
        <i class="bi bi-plus icon-show"></i>
        <i class="bi bi-dash icon-close"></i>
      </Link>
      <div
        id="accordion-list-3"
        className="collapse"
        data-bs-parent=".accordion-list"
      >
        <p>
          Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis
          orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra
          diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt.
          Lectus urna duis convallis convallis tellus. Urna molestie at
          elementum eu facilisis sed odio morbi quis
        </p>
      </div>
    </li>
  </ul>
  </div>
</div>

    </div>
  )
}

export default Faq