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

const StyledFaqs = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-black);
  color: var(--color-white);
  padding: var(--padding-large) var(--padding-medium);
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

const Title = styled.span`
  font-size: var(--font-medium);
`;

const Description = styled.span`
  font-size: var(--font-xsmall);
`;
function Faqs() {
  // STATE to OPEN and CLOSE faqs
  const [currentOpen, setCurrentOpen] = useState(null);
  return (
    <StyledFaqs>
      <Intro>
        <Title>Frequently Asked Questions</Title>
        <Description>
          If you have any other questions, feel free to send us a message at:
          <br /> contact@worldhello.us
        </Description>
      </Intro>
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
    </StyledFaqs>
  );
}

export default Faqs;
