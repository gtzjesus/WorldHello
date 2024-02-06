import Button from './Button';

function TriggerButton({ openModal }) {
  const handleClick = () => {
    openModal();
  };

  return <Button onClick={handleClick}>Open Modal</Button>;
}

export default TriggerButton;
