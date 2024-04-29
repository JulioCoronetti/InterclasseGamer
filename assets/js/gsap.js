gsap.registerPlugin(ScrollTrigger)

const boxContainer = document.querySelector("#boxContainer")
const splitTypes = boxContainer.querySelectorAll("h2");
splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars' });

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true
        },
        opacity: 0.2,
        stagger: 0.1
    })
})


const textosIntroducao = document.querySelector("#textosIntroducao");
const splitTypes2 = textosIntroducao.querySelectorAll("h2");
splitTypes2.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars' });

    gsap.from(text.chars, 2.2, {
        scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true
        },
        scaleY: 0,
        y: -20,
        transformOrigin: 'top',
        stagger: 0.1,
    })
})

const { innerHeight } = window;

gsap.from("#zoom-out video", {
    opacity: 0,
    scale: 0.5,
    stagger: 0.25,
    duration: 3,
    scrollTrigger: {
        trigger: "#zoom-out",
        pin: true,
        end: `+=${innerHeight * 1.5}`,
        scrub: 3
    }
})

const splitTypes3 = document.querySelectorAll(".tituloGSAP");
splitTypes3.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars' });

    gsap.from(text.chars, {
        y: 130,
        stagger: 0.05,
        ease: "back.out",
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: char,
            start: "top 80%",
        }
    });
})

const splitTypes4 = document.querySelectorAll(".textoGSAP");
splitTypes4.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars' });

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true
        },
        opacity: 0.2,
        stagger: 0.1
    })
})