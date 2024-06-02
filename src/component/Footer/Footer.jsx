import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css";

const Footer = () => {
  return (
    <div>
   
   <div className="container-fluid footer py-5 bg-secondary">
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-md-6 col-lg-6 col-xl-3">
        <div className="footer-item d-flex flex-column">
          <h4 className="mb-4 text-white">Get In Touch</h4>
          <Link to="#" className='text'>
            <i className="bi bi-home me-2" /> 123 Street, New York, USA
          </Link>
          <Link to="#" className='text'>
            <i className="bi bi-envelope me-2" /> info@example.com
          </Link>
          <Link to="#" className='text'>
            <i className="bi bi-phone me-2" /> +012 345 67890
          </Link>
          <Link to="#" className="mb-3 text">
            <i className="bi bi-print me-2" /> +012 345 67890
          </Link>
          <div className="d-flex align-items-center">
            <i className="bi bi-share fa-2x text-white me-2" />
            <Link
              className="btn btn-primary rounded-circle mx-1"
              to="#"
            >
              <i className="bi bi-facebook" />
            </Link>
            <Link
              className="btn-square btn btn-primary rounded-circle mx-1"
              to="#"
            >
              <i className="bi bi-twitter" />
            </Link>
            <Link
              className="btn-square btn btn-primary rounded-circle mx-1"
              to="#"
            >
              <i className="bi bi-instagram" />
            </Link>
            <Link
              className="btn-square btn btn-primary rounded-circle mx-1"
              to="#"
            >
              <i className="bi bi-linkedin-in" />
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-3">
        <div className="footer-item d-flex flex-column">
          <h4 className="mb-4 text-white">Company</h4>
          <Link to="#" className='text'>
            <i className="bi bi-angle-right me-2" /> About
          </Link>
          <Link to="#" className='text'>
            <i className="bi bi-angle-right me-2" /> Careers
          </Link>
          <Link to="#" className='text'>
            <i className="bi bi-angle-right me-2" /> Blog
          </Link>
          <Link to="#" className='text'>
            <i className="bi bi-angle-right me-2" /> Press
          </Link>
          <Link to="#" className='text'>
            <i className="bi bi-angle-right me-2" /> Gift Cards
          </Link>
          <Link to="#" className='text'>
            <i className="bi bi-angle-right me-2" /> Magazine
          </Link>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-3">
        <div className="footer-item d-flex flex-column">
          <h4 className="mb-4 text-white">Support</h4>
          <Link to="#" className='text'>
            <i className="bi bi-angle-right me-2" /> Contact
          </Link>
          <Link to="#" className='text'>
            <i className="bi bi-angle-right me-2" /> Legal Notice
          </Link>
          <Link to="#" className='text'>
            <i className="bi bi-angle-right me-2" /> Privacy Policy
          </Link>
          <Link to="#" className='text'>
            <i className="bi bi-angle-right me-2" /> Terms and Conditions
          </Link>
          <Link to="#" className='text'>
            <i className="bi bi-angle-right me-2" /> Sitemap
          </Link>
          <Link to="#" className='text'>
            <i className="bi bi-angle-right me-2" /> Cookie policy
          </Link>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-3">
        <div className="footer-item">
          <div className="row gy-3 gx-2 mb-4">
            <div className="col-xl-6">
              <form>
                <div className="form-floating">
                  <select className="form-select bg-dark border" id="select1">
                    <option value={1}>Arabic</option>
                    <option value={2}>German</option>
                    <option value={3}>Greek</option>
                    <option value={3}>New York</option>
                  </select>
                  <label htmlFor="select1">English</label>
                </div>
              </form>
            </div>
            <div className="col-xl-6">
              <form>
                <div className="form-floating">
                  <select className="form-select bg-dark border" id="select1">
                    <option value={1}>USD</option>
                    <option value={2}>EUR</option>
                    <option value={3}>INR</option>
                    <option value={3}>GBP</option>
                  </select>
                  <label htmlFor="select1">$</label>
                </div>
              </form>
            </div>
          </div>
          <h4 className="text-white mb-3">Payments</h4>
          <div className="footer-bank-card">
            <Link href="#" className="text-white me-2">
              <i className="bi bi-cc-amex fa-2x" />
            </Link>
            <Link href="#" className="text-white me-2">
              <i className="bi bi-cc-visa fa-2x" />
            </Link>
            <Link href="#" className="text-white me-2">
              <i className="bi bi-credit-card fa-2x" />
            </Link>
            <Link href="#" className="text-white me-2">
              <i className="bi bi-cc-mastercard fa-2x" />
            </Link>
            <Link href="#" className="text-white me-2">
              <i className="bi bi-cc-paypal fa-2x" />
            </Link>
            <Link href="#" className="text-white">
              <i className="bi bi-cc-discover fa-2x" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Footer