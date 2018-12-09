let canvas = document.querySelector('#pe')
let ctx = canvas.getContext('2d')
let imageData

let img = new Image()
img.src = './photo.jpeg'

img.addEventListener('load', (e)=> {
    ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height)
    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
})

document.querySelector('#contrast').addEventListener('input', (e)=>{doMagic(e.target.value)})

function doMagic(contrast) { 
    console.log(contrast)  
    let newImageData = new ImageData(canvas.width, canvas.height)
    for (let i = 0; i<newImageData.data.length; i+=4)
    {
        newImageData.data[i] = Math.min(255, imageData.data[i]+contrast)
        newImageData.data[i+1] = Math.min(255, imageData.data[i+1]+contrast)
        newImageData.data[i+2]= Math.min(255, imageData.data[i+2]+contrast)
        newImageData.data[i+3]= imageData.data[i+3]
    }
    ctx.putImageData(newImageData, 0, 0)
}