import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";

import data from "./data";


export default function App() {

    const cards = data.map(item => {
        return (
            <Card
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <Hero />

            <section className="cards-list">
                {cards}
            </section>

        </div>
    )
}