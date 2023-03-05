

export interface ICatCard {
  sampleTextProp: string;
}

const CatCard: React.FC<ICatCard> = ({ sampleTextProp }) => {
  return <div className="p-40 border border-black text-white">{sampleTextProp}</div>;
};

export default CatCard;
