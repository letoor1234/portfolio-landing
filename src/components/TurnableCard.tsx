const TurnableCard = ({ frontContent, backContent }: any) => {
  return (
    <div className="relative w-64 h-96 m-4 flip-card hover:drop-shadow-[0_0_5px_rgba(52,211,155,0.25)]">
      <div className="flip-card-inner w-full h-full">
        <div className="w-full h-full flip-card-front">{frontContent}</div>
        <div className="w-full h-full flip-card-back">{backContent}</div>
      </div>
    </div>
  );
};

export default TurnableCard;
