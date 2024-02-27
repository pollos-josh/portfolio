import { Zeyada } from "next/font/google";

const zeyada = Zeyada({
  weight: '400',
  subsets: ["latin"],
  display: 'swap',
});

export default function ScrollText() {
    return (
        <div class="relative flex overflow-x-hidden font-darker_grotesque font-normal">
            <div class="pb-12 animate-marquee whitespace-nowrap">
                <span class={`mx-4 text-4xl ${zeyada.className}`}>My Works</span>
                <span class={`mx-4 text-4xl ${zeyada.className}`}>My Works</span>
                <span class="mx-4 text-4xl">My Works</span>
                <span class={`mx-4 text-4xl`}>My Works</span>
                <span class="mx-4 text-4xl">My Works</span>
                <span class={`mx-4 text-4xl ${zeyada.className}`}>My Works</span>
                <span class="mx-4 text-4xl">My Works</span>
                <span class="mx-4 text-4xl">My Works</span>
                <span class="mx-4 text-4xl">My Works</span>
            </div>

            <div class="pb-12 absolute top-0 animate-marquee2 whitespace-nowrap">
                <span class={`mx-4 text-4xl ${zeyada.className}`}>My Works</span>
                <span class="mx-4 text-4xl">My Works</span>
                <span class={`mx-4 text-4xl`}>My Works</span>
                <span class="mx-4 text-4xl">My Works</span>
                <span class={`mx-4 text-4xl ${zeyada.className}`}>My Works</span>
                <span class={`mx-4 text-4xl `}>My Works</span>
                <span class={`mx-4 text-4xl ${zeyada.className}`}>My Works</span>
                <span class="mx-4 text-4xl">My Works</span>
                <span class={`mx-4 text-4xl`}>My Works</span>
            </div>
       </div>
    )
}