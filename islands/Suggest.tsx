import type { Signal } from "@preact/signals";

interface suggestProps {
  cake: Signal<string>;
  food: Signal<string>;
}

const cakesList = [
  "Choco Truffle Cake",
  "Choco Vanilla Cake",
  "Marble Cake",
  "Chocolate Snicker Cake",
  "Choco Crunch KitKat Cake",
  "Choco Chip Cake",
  "Choco Oreo Cake",
];

const foodList = [
  "Pizza(PizzaHut)",
  "Pizza(Dominos)",
  "Rolls(Rollsking)",
  "Rolls(Fassos)",
  "Burger(McD)",
  "Burger(BurgerSingh)",
  "Burger(BurgerKing)",
];

function getRandom(max: number): number {
  const randomBytes = new Uint32Array(1);

  let randomIndex;
  do {
    crypto.getRandomValues(randomBytes);
    randomIndex = randomBytes[0] % (max + 1);
  } while (randomIndex > max);

  return randomIndex;
}

export default function Suggest(props: suggestProps) {
  function suggest() {
    props.cake.value = cakesList[getRandom(cakesList.length - 1)];
    props.food.value = foodList[getRandom(foodList.length - 1)];
  }

  return (
    <div>
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <div class={"flex flex-col items-center space-y-12"}>
            <div class="text-2xl font-bold">{props.cake}</div>
            <div>
              <h3 class="text-xl font-bold">With</h3>
            </div>
            <div class="text-2xl font-bold">{props.food}</div>
            <div>
              <button
                onClick={suggest}
                type="button"
                class="text-gray-900 uppercase bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xl px-16 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Suggest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
