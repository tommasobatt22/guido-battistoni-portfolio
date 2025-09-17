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
            <div class="flex items-center w-full absolute p-5 bottom-0 ">
                <div class="w-4/7 flex">
                    <button class="small-text text-white" @click="showAbout">About</button>
                </div>
                <div class="w-3/7 flex justify-between">
                    <button class="small-text text-white" @click="showWork">Work</button>
                    <span class="small-text text-white"><a href="mailto:battistoniguido@gmail.com">Contact</a></span>
                </div>
            </div>

            <!-- about section -->
            <div class="w-full bg-white z-20 absolute top-full py-3 px-5 " id="about-section">
                <div class="relative" style="min-height: -webkit-fill-available ">

                    <div class="text-black text-title tracking-tight leading-none">
                        <span class="mb-16 block">
                            <span class="text-white">Guido Battistoni</span> is an interdisciplinary brand designer and
                            art director whose practice moves between culture, technology, and visual communication.
                        </span>

                    </div>
                    <div class="flex items-stretch">
                        <div class="w-4/7">
                            <div class="">
                                <span class="medium-text text-black/50 block mb-4">
                                    Rooted in <span class="text-black ">motion</span>, <span
                                        class="text-black">typography</span>, and <span class="text-black">generative
                                        AI</span>, he blends design and storytelling into refined, culturally attuned
                                    brand experiences.
                                    With a background in the luxury sector, from fashion to automotive and spirits, his
                                    work unites craft and innovation into a distinct, cohesive vision. <br>
                                </span>
                                <span class="medium-text text-black/50 block">
                                    Currently Art Director at AKQA Venice.
                                </span>
                            </div>
                        </div>
                        <div class="me-5 w-3/7">
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
                                        Ferrari, Prada, Nike, Campari, Groupe l’Occitane, Brembo, CocaCola Company,
                                        IKEA, H&M, Sony, Haynes Group
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-fill w-full items-center absolute bottom-3">
                        <div class="w-4/7 flex">
                            <button class="text-black" @click="showAbout">About</button>
                        </div>
                        <div class="w-3/7 flex justify-end">
                            <span class="text-black"><a href="mailto:battistoniguido@gmail.com">Contact</a></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="absolute z-20 top-full w-full" id="works">
            <div v-for="(work, index) in works" :key="index"
                class="h-[90vh] w-full relative"
                :id="`work-section-${index}`"
                :style="{ backgroundImage: `url('${work.backgroundImage}')` }" 
                @mouseenter="showVideo(index)"
                @mouseleave="hideVideo(index)"
            >
                 <video
                    :id="`video-${index}`"
                    :src="work.video"
                    class="absolute top-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
                    muted
                    loop
                    preload="metadata"
                ></video>
                <div class="sticky work-titles flex items-center w-full p-5 opacity-0" 
                    :id="`work-${index + 1}`">
                    <div class="w-4/7 flex">
                        <button class="medium-text text-white" @click="showAbout">{{ work.title }}</button>
                    </div>
                    <div class="w-3/7 flex justify-between">
                        <button class="medium-text text-white" @click="showWork">{{ work.subtitle }}</button>
                        <span class="medium-text text-white">
                            <a :href="`mailto:battistoniguido@gmail.com?subject=${work.title}`">{{ work.year }}</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="absolute z-20 top-full w-full " id="works">
            <div class="h-[90vh] w-full " id="work-section-1"
                style="background-image: url('/src/assets/images/1_bg.png');">
                <div class="sticky work-titles flex items-center w-full p-5 opacity-0" id="work-1">
                    <div class="w-4/7 flex">
                        <button class="medium-text text-white" @click="showAbout">Swagg</button>
                    </div>
                    <div class="w-3/7 flex justify-between">
                        <button class="medium-text text-white" @click="showWork">ty shi</button>
                        <span class="medium-text text-white"><a
                                href="mailto:battistoniguido@gmail.com">Yurrrr</a></span>
                    </div>
                </div>
            </div>
            <div class="h-[90vh] w-full py-10" id="work-section-2"
                style="background-image: url('/src/assets/images/2_bg.png');">
                <div class="sticky work-titles flex items-center w-full p-5" id="work-2">
                    <div class="w-4/7 flex">
                        <button class="medium-text text-white" @click="showAbout">Lavoro swag</button>
                    </div>
                    <div class="w-3/7 flex justify-between">
                        <button class="medium-text text-white" @click="showWork">Sono la goat</button>
                        <span class="medium-text text-white"><a href="mailto:battistoniguido@gmail.com">Fr fr</a></span>
                    </div>
                </div>
            </div>
        </div> -->
    </div>

</template>

<script>
import { ref, onMounted } from 'vue'
import { gsap } from "gsap";

export default {
    data() {
        return {
             works: [
                {
                    title: 'Ferrari Brand Experience',
                    subtitle: 'Art direction',
                    year: '2025',
                    backgroundImage: '/src/assets/images/1_bg.png',
                    video:'/src/assets/videos/sample.mp4'
                },
                {
                    title: 'Prada Digital Campaign',
                    subtitle: 'Art direction',
                    year: '2025',
                    backgroundImage: '/src/assets/images/2_bg.png',
                    video:'/src/assets/videos/sample.mp4'
                },
            ]
        }
    },
    methods: {
        showAbout() {
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
            this.changeGuidoColor()

        },
        showWork() {
            const pageContainer = document.getElementById("page-container")
            const nome = document.getElementById("name-section")
            const workSection = document.getElementById('works')
            console.log(workSection);


            const top = nome.offsetTop + nome.offsetHeight
            const viewportHeight = window.innerHeight
            const remainingHeight = viewportHeight - top

            pageContainer.classList.remove('overflow-hidden')

            gsap.set(workSection, {
                top: '100%', // Parte dal basso
            })

            gsap.to(workSection, {
                top: top + 'px',
                duration: 0.6,
                ease: "power2.out"
            })

            this.initWorkSectionAnimations()
        },
        changeGuidoColor() {
            const gBs = document.getElementsByClassName('guido-battistoni')
            Array.from(gBs).forEach(gb => {
                if (gb.classList.contains('text-white')) {
                    gb.classList.remove('text-white');
                } else {
                    gb.classList.add('text-white');
                }
            });
        },
        initWorkSectionAnimations() {
            // Configurazione dell'Intersection Observer
            const observerOptions = {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.5 // triggera quando il 50% dell'elemento è visibile
            };

            // Callback che viene chiamata quando cambia la visibilità
            const observerCallback = (entries) => {
                entries.forEach(entry => {
                    const workDiv = entry.target.querySelector('[id^="work-"]');

                    if (entry.isIntersecting) {
                        // Sezione visibile a metà schermo - anima verso opacità 0.8
                        gsap.to(workDiv, {
                            opacity: 0.8,
                            duration: 0.6,
                            ease: "power2.out"
                        });
                    } else {
                        // Sezione non più visibile - riporta opacità a 0
                        gsap.to(workDiv, {
                            opacity: 0,
                            duration: 0.4,
                            ease: "power2.in"
                        });
                    }
                });
            };
            // Crea l'observer
            const observer = new IntersectionObserver(observerCallback, observerOptions);

            // Osserva tutte le sezioni work
            const workSections = document.querySelectorAll('[id^="work-section-"]');
            workSections.forEach(section => {
                observer.observe(section);
            });


        },
        showVideo(workIndex){
             const video = document.getElementById(`video-${workIndex}`);
            if (video) {
                // Fade in del video
                gsap.to(video, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
                // Play del video
                video.play().catch(e => {
                    console.log('Video autoplay prevented:', e);
                });
            }
        },
        hideVideo(workIndex){
            const video = document.getElementById(`video-${workIndex}`);
            if(video){

                gsap.to(video, {
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in"
                });
                setTimeout(() => {
                    video.pause();
                    video.currentTime = 0; // Reset al inizio
                }, 300);
            }
        }
        

    },
}



</script>