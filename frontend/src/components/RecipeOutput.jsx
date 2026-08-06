import generateRecipe from "../assets/images/generateRecipe.png";
import Loading from "./Loading";
import EmptyResponse from "./EmptyResponse";
import RecipeCards from "./RecipeCards";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

const RecipeOutput = () => {
  const { loading, recipes } = useContext(RecipeContext);
  return (
    <>
      {loading && <Loading />}
      {!loading && recipes.length === 0 && <EmptyResponse />}
      {/*Response cards*/}
      {!loading && recipes.length > 0 && (
        <section className="mt-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">
                {recipes.length} Recipes Generated
              </h2>

              <p className="text-slate-500 mt-2">
                AI found the best recipes using your ingredients.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {recipes.map((recipe) => (
              <RecipeCards recipe={recipe} key={recipe.id} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default RecipeOutput;
