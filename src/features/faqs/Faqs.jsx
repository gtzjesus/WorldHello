import styled from 'styled-components';
import FaqsItem from './FaqsItem';
import { useState } from 'react';
import LazyLoad from 'react-lazyload';

// FAQs
const faqs = [
  {
    title: 'What benefits do I get with a custom website?',
    text: 'Having a unique brand that conveys the value you provide to customers is an important component of building a strong business. Custom web designs allow you to build your site in a way that will set up you up for success!',
  },
  {
    title: 'What makes WorldHello unique?',
    text: 'Our website development agency prioritises generating business results over completing tasks. Our belief stands in perfection requiring focus, which is why we specialise in only one service: web development!',
  },
  {
    title: 'What services do you offer?',
    text: 'WorldHello stands in creating websites that target your ideal niche through strategic design, copywriting, and user experience. If you already have a website design, we can take care of the development while ensuring it aligns with your business goals.',
  },
  {
    title: 'How long does it take to build a website?',
    text: 'The time to create a website varies based on the complexity and requirements of your project. Typically it takes our team between 5 and 9 weeks from the initial discovery session to launching your new website!',
  },
  {
    title: 'Is there ongoing support once website is complete?',
    text: 'At WorldHello, we are committed to building long-lasting relationships with our clients, rather than focusing on one-off transactions. We offer ongoing support and maintenance services to ensure your site stays up-to-date and performs optimally.',
  },
  {
    title: 'How is the web development process?',
    text: 'To achieve the best results for your business goals we follow a very specific development process: We first identify the goal of your website, then we research your specific market, followed by creating a performance strategy to bring in new clients, then we craft a unique design optimised for conversions, we implement the design, and finally launch your new website. ',
  },
  {
    title: 'Where is WorldHello located?',
    text: 'WorldHello is a Texas based Website Development Agency that serves clients all over the world! Whether you are located nearby or on the other side of the world, we are dedicated to deliver exceptional results for every online presence.',
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
  padding: 0 0 var(--padding-medium) 0;
`;

const Title = styled.span`
  font-size: var(--font-medium);

  @media (min-width: 61.25em) {
    font-size: var(--font-large);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-xlarge);
  }
`;

const Description = styled.span`
  font-size: var(--font-xsmall);

  @media (min-width: 61.25em) {
    font-size: var(--font-small);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-medium);
  }
`;

const Special = styled.span`
  color: var(--color-tan);
  font-size: var(--font-large);

  @media (min-width: 61.25em) {
    font-size: var(--font-xlarge);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-xxlarge);
  }
`;
function Faqs() {
  // STATE to OPEN and CLOSE faqs
  const [currentOpen, setCurrentOpen] = useState(null);
  return (
    <LazyLoad>
      <StyledFaqs>
        <Intro>
          <Title>
            Frequently <Special>Asked Questions</Special>
          </Title>
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
    </LazyLoad>
  );
}

export default Faqs;
