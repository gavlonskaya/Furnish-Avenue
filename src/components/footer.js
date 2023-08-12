import React, { Component } from "react";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";

export class footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-page">
          <span className="logo">Furnish Avenue</span>
          <div className="menu">
            <a>
              <h1>Pages</h1>
            </a>
            <a href="#">
              <p>Home</p>
            </a>
            <a href="#">
              <p>About</p>
            </a>
            <a href="#">
              <p>Blog</p>
            </a>
            <a href="#">
              <p>Agents</p>
            </a>
            <a href="#">
              <p>Contact</p>
            </a>
            <a href="#">
              <p>FAQs</p>
            </a>
            <a href="#">
              <p>Properties</p>
            </a>
            <a>
              <h1>CMS Pages</h1>
            </a>
            <a href="#">
              <p>Property</p>
            </a>
            <a href="#">
              <p>Property Single</p>
            </a>
            <a href="#">
              <p>Blog Categories</p>
            </a>
            <a href="#">
              <p>Blog Single</p>
            </a>
            <a href="#">
              <p>Agent Single</p>
            </a>
            <a>
              <h1>Utility Pages</h1>
            </a>
            <a href="#">
              <p>Style Guide</p>
            </a>
            <a href="#">
              <p>Changelog</p>
            </a>
            <a href="#">
              <p>Licenses</p>
            </a>
            <a href="#">
              <p>404</p>
            </a>
            <a href="#">
              <p>Password</p>
            </a>
            <a href="#">
              <p>Search</p>
            </a>
          </div>
          <div className="subscribe">
            <h1>Subscribe</h1>
            <h2>
              Join our newsletter to stay up to date on features and releases.
            </h2>
            <input type="email" placeholder="Enter your email"></input>
            <button>Subscribe</button>
            <p>By subscribing you agree to with our Privacy Policy</p>
          </div>
        </div>
        <div className="footer-info">
          <p>© Furnish Avenue by Gavlonskaya.</p>
          <div className="social-media">
            <RiFacebookFill />
            <RiInstagramLine />
            <RiTwitterFill />
            <RiLinkedinBoxFill />
          </div>
        </div>
      </footer>
    );
  }
}

export default footer;
