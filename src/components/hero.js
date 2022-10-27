import React from "react";
import "../style.css";

export default function Hero() {
    return (
        <section className="hero-container">
            <img src="../images/main-banner.png" className="banner-logo" />
            <h1 className="hero-title">Online Expriences</h1>
            <p className="hero-description">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}