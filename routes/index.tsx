import { useSignal } from "@preact/signals";
import Suggest from "../islands/Suggest.tsx";

export default function Home() {
  const cake = useSignal("");
  const food = useSignal("");

  return (
    <div>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">What I will order today ?</h1>
        </div>
      </div>

      <Suggest cake={cake} food={food}></Suggest>
    </div>
  );
}
