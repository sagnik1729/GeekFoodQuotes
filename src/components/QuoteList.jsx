import React from 'react';
import QuoteCard from './QuoteCard';
import './QuoteList.css';

const QuoteList = ({ quotes }) => (
    <div className="quote-list">
        {quotes.map((q, idx) => (
            <QuoteCard key={idx} quote={q} />
        ))}
    </div>
);

export default QuoteList;