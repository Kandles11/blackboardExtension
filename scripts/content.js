console.log("code is loaded!")

window.onload = () => {
        const targetNode = document.body;

        const config = { attributes: true, childLIst: true, subtree: true};
        
        const callback = (observer) => {
            const banners = document.getElementsByClassName("course-banner");
        
            console.log("inside the callback!")
            console.log(banners)
            
            for (let i = 0; i < banners.length; i++) {
                console.log(banners[i])
                banners[i].style.backgroundImage = "url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*')";
            }
        };
        
        const observer = new MutationObserver(callback);
        
        observer.observe(targetNode, config);
}
    