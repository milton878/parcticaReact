import { NewArticle } from "./NewArticle";

export const NewContainer = () => {
  return (
    <aside className="bg-VerydarkBlue text-OffWhite py-[28px] px-[20px]">
      <h1 className="text-SoftOrange text-4xl font-bold ">New</h1>
      <NewArticle
        title="Hydrogen VS Electric Cars"
        text="Will hydrogen-fueled cars ever catch up to EVs?"
      />
      <NewArticle
        title="The Dowside of AI Artistry"
        text="What are the possible adverse efects of on-demand AI image"
      />
      <NewArticle
        title="Is VC Funding Drying Up?"
        text="Private funding by VC firms is 50% YOY. We take a look"
      />
    </aside>
  );
};
