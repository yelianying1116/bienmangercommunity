/* =====================================================
   BIEN MANGER COMMUNITY
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   WAIT DOM LOAD
===================================================== */


document.addEventListener(
    "DOMContentLoaded",
    function(){



/* =====================================================
   MOBILE MENU
===================================================== */


const menuBtn =
document.getElementById("menu-btn");


const mobileMenu =
document.getElementById("mobile-menu");


const closeMenu =
document.getElementById("close-menu");



if(menuBtn){


    menuBtn.addEventListener(
        "click",
        function(){


            mobileMenu.classList.add(
                "active"
            );


        }
    );


}



if(closeMenu){


    closeMenu.addEventListener(
        "click",
        function(){


            mobileMenu.classList.remove(
                "active"
            );


        }
    );


}



/* 点击菜单链接自动关闭 */

const mobileLinks =
document.querySelectorAll(
    ".mobile-menu a"
);



mobileLinks.forEach(
    link=>{


        link.addEventListener(
            "click",
            ()=>{


                mobileMenu.classList.remove(
                    "active"
                );


            }
        );


    }
);





/* =====================================================
   STICKY HEADER
===================================================== */


const header =
document.querySelector(
    ".header"
);



window.addEventListener(
    "scroll",
    ()=>{


        if(window.scrollY > 80){


            header.classList.add(
                "sticky"
            );


        }

        else{


            header.classList.remove(
                "sticky"
            );


        }


    }
);





/* =====================================================
   FAQ ACCORDION
===================================================== */


const faqButtons =
document.querySelectorAll(
    ".faq-question"
);



faqButtons.forEach(
    button=>{


        button.addEventListener(
            "click",
            ()=>{


                const item =
                button.parentElement;



                item.classList.toggle(
                    "active"
                );



                const answer =
                item.querySelector(
                    ".faq-answer"
                );



                if(answer.style.maxHeight){


                    answer.style.maxHeight =
                    null;


                }

                else{


                    answer.style.maxHeight =
                    answer.scrollHeight
                    + "px";


                }



            }
        );


    }
);





/* =====================================================
   BACK TO TOP
===================================================== */


const backTop =
document.getElementById(
    "backTop"
);



window.addEventListener(
    "scroll",
    ()=>{


        if(window.scrollY > 400){


            backTop.classList.add(
                "show"
            );


        }

        else{


            backTop.classList.remove(
                "show"
            );


        }


    }
);



if(backTop){


backTop.addEventListener(
    "click",
    ()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    }
);


}





/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */


const revealElements =
document.querySelectorAll(
    ".section, .quick-card, .service-card, .value-card"
);



function reveal(){


    revealElements.forEach(
        element=>{


            const windowHeight =
            window.innerHeight;



            const elementTop =
            element.getBoundingClientRect()
            .top;



            if(
                elementTop <
                windowHeight - 100
            ){


                element.classList.add(
                    "show"
                );


            }



        }
    );


}



window.addEventListener(
    "scroll",
    reveal
);



reveal();





/* =====================================================
   COUNTER ANIMATION
===================================================== */


const counters =
document.querySelectorAll(
    ".counter-item h2"
);



let counterStarted=false;



function startCounter(){


    if(counterStarted)
    return;



    const section =
    document.querySelector(
        ".counter"
    );



    if(!section)
    return;



    const position =
    section.getBoundingClientRect()
    .top;



    if(
        position <
        window.innerHeight
    ){


        counterStarted=true;



        counters.forEach(
            counter=>{


                let target =
                parseInt(
                    counter.innerText
                );



                let count=0;



                let speed =
                target / 100;



                let timer =
                setInterval(
                    ()=>{


                        count += speed;



                        if(count>=target){


                            counter.innerText =
                            target + "+";

                            clearInterval(
                                timer
                            );


                        }

                        else{


                            counter.innerText =
                            Math.floor(count)
                            + "+";


                        }


                    },
                    20
                );


            }
        );


    }


}



window.addEventListener(
    "scroll",
    startCounter
);




});