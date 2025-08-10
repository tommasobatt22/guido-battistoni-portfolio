<template>
    <div class="overflow-hidden relative" id="page-container">
        <div class="h-dvh flex w-full relative overflow-hidden">
            <!-- data -->
            <div class="flex flex-wrap h-full content-center w-full p-5 ">
                <div class="w-4/7 flex relative z-30 pt-3" id="name-section">
                    <span class="text-white text-title tracking-tight leading-none guido-battistoni">Guido
                        Battistoni</span>
                </div>
                <div class="w-3/7 flex items-end pb-2">
                    <span class="text-white">
                        Art Director based in Venice focused on creating <br> purposeful and contemporary work for
                        luxury brands
                    </span>
                </div>
            </div>
            <!-- fake footer -->
            <div class="flex items-center w-full absolute p-3 bottom-0 ">
                <div class="w-4/7 flex">
                    <button class="small-text text-white" @click="showAbout">About</button>
                </div>
                <div class="w-3/7 flex justify-between">
                    <button class="small-text text-white" @click="showWork">Work</button>
                    <span class="small-text text-white"><a href="mailto:battistoniguido@gmail.com">Contact</a></span>
                </div>
            </div>

            <!-- about section -->
            <div class="w-full bg-white z-20 absolute top-full py-3" id="about-section">
                <div class="text-black text-title tracking-tight leading-none px-5">
                    <span class="mb-3 block">
                        <span class="text-white">Guido Battistoni</span> is a Venice-based interdisciplinary designer
                        investigating the discipline of visual communication across mediums and technologies.
                    </span>
                    <span class="block">
                        Right now at AKQA
                    </span>
                </div>
                <div class="flex justify-end items-stretch">
                    <div class="me-5 w-3/7 ">
                        <div class="border-t-1 border-black/50 py-3 flex flex-row ">
                            <div class="w-2/7">
                                <span class="small-text opacity-50">Awards</span>
                            </div>
                            <div class="w-5/7">
                                <span class="small-text block mb-3">ADCI</span>
                                <span class="small-text block">The Lovie Awards</span>
                            </div>
                        </div>
                        <div class="border-t-1 border-black/50 py-3 flex flex-row ">
                            <div class="w-2/7">
                                <span class="small-text opacity-50"> Selected Clients</span>
                            </div>
                            <div class="w-5/7">
                                <span class="small-text block mb-3">
                                    Ferrari, Campari, Prada, CocaCola Company, H&M, Hanes
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center w-full absolute px-5 bottom-3 ">
                    <div class="w-4/7 flex">
                        <button class="text-black" @click="showAbout">About</button>
                    </div>
                    <div class="w-3/7 flex justify-end">
                        <span class="text-black"><a href="mailto:battistoniguido@gmail.com">Contact</a></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[90vh] bg-red-700 absolute z-20 top-full w-full" id="work-section">
            
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from "gsap";

onMounted(() => {
    // console.log(nome.offsetTop)
})

function showAbout() {
    const nome = document.getElementById("name-section")
    const aboutSection = document.getElementById('about-section')

    if (aboutSection.classList.contains('top-full')) {
        // Apertura con GSAP
        aboutSection.classList.remove('top-full')
        const top = nome.offsetTop
        const viewportHeight = window.innerHeight
        const remainingHeight = viewportHeight - top

        // IMPORTANTE: Prima imposta la posizione iniziale (da dove deve partire l'animazione)
        gsap.set(aboutSection, {
            top: '100%', // Parte dal basso
            height: `${remainingHeight}px` // Imposta subito l'altezza corretta
        })

        // Animazione di apertura
        gsap.to(aboutSection, {
            top: top + 'px',
            height: `${remainingHeight}px`,
            duration: 0.6,
            ease: "power2.out"

        })

    } else {
        // Animazione di chiusura
        gsap.to(aboutSection, {
            top: '100%',
            duration: 0.6,
            ease: "power2.in",
            onComplete: () => {
                aboutSection.classList.add('top-full')
            }
        })
    }  
    changeGuidoColor()

}
function showWork(){
    const pageContainer = document.getElementById("page-container")
    const nome = document.getElementById("name-section")
    const workSection = document.getElementById('work-section')

    const top = nome.offsetTop + nome.offsetHeight
    const viewportHeight = window.innerHeight
    const remainingHeight = viewportHeight - top

    pageContainer.classList.remove('overflow-hidden')

    gsap.set(workSection, {
            top: '100%', // Parte dal basso
        })

        // Animazione di apertura
        gsap.to(workSection, {
            top: top + 'px',
            duration: 0.6,
            ease: "power2.out"

        })

    
}
function changeGuidoColor() {
    const gBs = document.getElementsByClassName('guido-battistoni')
    Array.from(gBs).forEach(gb => {
        if (gb.classList.contains('text-white')) {
            gb.classList.remove('text-white');
        } else {
            gb.classList.add('text-white');
        }
    });
}
</script>