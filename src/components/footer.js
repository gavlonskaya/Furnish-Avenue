import React, { Component } from "react";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";

export class footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__header">
          <div className="footer__logo">Furnish Avenue</div>
          <div className="footer__page">
            <div className="footer__menu title">Pages</div>
            <a href="#" className="footer__menu link">
              Home
            </a>
            <a href="#" className="footer__menu link">
              About
            </a>
            <a href="#" className="footer__menu link">
              Blog
            </a>
            <a href="#" className="footer__menu link">
              Agents
            </a>
            <a href="#" className="footer__menu link">
              Contact
            </a>
            <a href="#" className="footer__menu link">
              FAQs
            </a>
            <a href="#" className="footer__menu link">
              Properties
            </a>
            <div className="footer__menu title">CMS Pages</div>
            <a href="#" className="footer__menu link">
              Property
            </a>
            <a href="#" className="footer__menu link">
              Property Single
            </a>
            <a href="#" className="footer__menu link">
              Blog Categories
            </a>
            <a href="#" className="footer__menu link">
              Blog Single
            </a>
            <a href="#" className="footer__menu link">
              Agent Single
            </a>
            <div className="footer__menu title">Utility Pages</div>
            <a href="#" className="footer__menu link">
              Style Guide
            </a>
            <a href="#" className="footer__menu link">
              Changelog
            </a>
            <a href="#" className="footer__menu link">
              Licenses
            </a>
            <a href="#" className="footer__menu link">
              404
            </a>
            <a href="#" className="footer__menu link">
              Password
            </a>
            <a href="#" className="footer__menu link">
              Search
            </a>
          </div>
          <div className="footer__subscribe">
            <div className="footer__title title">Subscribe</div>
            <div className="footer__title text">
              Join our newsletter to stay up to date on features and releases.
            </div>
            <input
              className="footer__input"
              type="email"
              placeholder="Enter your email"
            ></input>
            <button className="footer__button">Subscribe</button>
            <div className="footer__subscribing">
              By subscribing you agree to with our Privacy Polic
            </div>
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__name">© Furnish Avenue by Gavlonskaya.</div>
          <div className="footer__social-media svg">
            <RiFacebookFill />
            <RiInstagramLine />
            <RiTwitterFill />
            <RiLinkedinBoxFill />
          </div>
        </div>
      </div>
    );
  }
}

export default footer;
