import React, { useState } from 'react';
import { questions } from './questions';
import SubBanner from '../../components/SubBanner';
import SingleQuestion from './SingleQuestion';

const FAQPages = () => {
  const [cards] = useState(questions);

  return (
    <div>
      <SubBanner title="FAQ" />
      <section className="max-w-full mx-auto py-20 px-4 lg:px-[133px]">
        <h1 className="text-3xl text-center uppercase font-open-sans font-bold tracking-tight mb-9">
          Các câu hỏi thường gặp
        </h1>
        <section className="grid grid-cols-1 gap-8">
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>
      </section>
    </div>
  );
};

export default FAQPages;
