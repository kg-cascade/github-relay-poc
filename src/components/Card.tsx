interface CardProps {
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  return <div className="bg-primary/30 p-4 rounded-2xl">{props.children}</div>;
};
export default Card;
