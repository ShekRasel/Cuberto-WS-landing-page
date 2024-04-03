Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: .5,
  });

  Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.hoverWithMediaCircle(".hover-target" /* Element to target.*/, {
    images: ["/images/image1.avif", "/images/image2.avif", "/images/image3.avif"] /*OR*/,
    //videos: ["video1.mp4", "video2.mp4"],
  });


  gsap.to(".scrolling-text", {
    scrollTrigger:{
      trigger:'#scrolling',
      pin:true,
      start: "top top",
      endtrigger:'.lastone',
      scrub:1
    },
    y:'-300%',
    ease: Power1
  });


  let sections = document.querySelectorAll('.scrolling-text');
  Shery.imageEffect(".image-div", {
    style: 4,
    slideStyle: (setScroll) => {
     sections.forEach(function(section,index){
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          scrub: 1,
          onUpdate: function(prog){
            setScroll(prog.progress+ index);
          }
        })
     })
    },
  });