import styled from 'styled-components';
import FaqsItem from './FaqsItem';
import { useState } from 'react';
// FAQs
const faqs = [
  {
    title: 'Where are the benefits of a custom website from WorldHello?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'What services do we provide?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'What is the web design/development process?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
  {
    title: 'How long does it take to build a website?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
  {
    title: 'Where are we located?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

const StyledFaqs = styled.div``;
function Faqs() {
  // STATE to OPEN and CLOSE faqs
  const [currentOpen, setCurrentOpen] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((element, index) => (
        <FaqsItem
          currentOpen={currentOpen}
          onOpen={setCurrentOpen}
          title={element.title}
          num={index}
          key={element.title}
        >
          {element.text}
        </FaqsItem>
      ))}
    </div>
  );
}

export default Faqs;
