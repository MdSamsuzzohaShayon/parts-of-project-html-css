const image = document.querySelectorAll('.image');
const image_output = document.getElementById('image-output');
console.log(image_output.src);
let image_output_src = image_output.src;

// image_output.innerText.src = 


image.forEach(img => img.addEventListener('click', e =>{
        console.log(e.target.attributes);
        console.log(e.target.src);       
        // const image_src = e.target.src;
        
        image_output_src = e.target.src;

        // image_output.innerText.src = image_src ;
        // let img = document.createElement("img").classList.add("ui" , "large", "image")
        // image_output.appendChild(img);

        // image_output.childNodes
        
    }) 
);

