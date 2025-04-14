import React, { useState } from 'react';
import QuoteList from './QuoteList';
import './QuoteContainer.css';

const QuoteContainer = ({ initialQuotes }) => {
    const [quotes, setQuotes] = useState(initialQuotes);

    const shuffleQuotes = () => {
        const shuffled = [...quotes].sort(() => Math.random() - 0.5);
        setQuotes(shuffled);
    };

    return (
        <section className="quote-container">
            <button className="shuffle-btn" onClick={shuffleQuotes}>
                Shuffle Quotes
            </button>
            <QuoteList quotes={quotes} />
        </section>
    );
};

export default QuoteContainer;