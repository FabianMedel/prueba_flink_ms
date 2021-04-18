const Jimp = require('jimp');
var request = require(`request`);

/* */
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/* build array: random url */
async function buildURLimage(){
    console.log("Build array images...");
    let urls = [];
    for(let i = 0 ; i < 10; i++){
        const url = getRandomArbitrary(0,2) === 0 ? 'https://api.thecatapi.com/v1/images/search' :  'https://api.thedogapi.com/v1/images/search';
        urls.push(url);
    }
    return urls;
}

/*function request image url */
async function request_image(method, info){
	return new Promise(function(resolve,reject){
		try{
			method(info,(err,res,body)=>{
				err ? reject(err) : resolve(body)
			})
		}
		catch(error){
			reject(error)
		}
	})
} 

/* function requets and process image */
async function process_image(){
    console.log("Request url image and exec process...")
    let arrayResponse = [];
    let urls = await buildURLimage()
    
    for(url of urls){
        let data = await request_image(request.get,{uri:url});
        let objectImage = JSON.parse(data);
        arrayResponse.push(await exec_proms(objectImage[0].url))
    }

    return arrayResponse;
}

/* function execute all promises (rotate, resize,convert to b 64) */
async function exec_proms(url){
    console.log(url)
    let values = Promise.all([resizeImage(url),rotateImage(url),convertBase64(url)]).then(results => {
        let resultArrayImages = {url:url,m80px: results[0], r30d:results[1],b64:results[2]};
        return resultArrayImages;
    })

    return values
}

/* function convert image to base64 */
async function convertBase64(url){
    const image = await Jimp.read(url).then(img => {
        return img.getBase64Async(img.getMIME());
      }).catch(err => {
        console.log(err);
      });

    return image;
}

/* function resize  80 px */
async function resizeImage(url){
    const image = await Jimp.read(url).then(image => {
        return image.resize(Jimp.AUTO,80).write('lena-small-bw.jpg');
      }).catch(err => {
        console.log(err);
      });

    return JSON.stringify(await image.getBufferAsync(image.getMIME()));
}

/* function rotate 30° */
async function rotateImage(url){

    const image = await Jimp.read(url).then(image => {
        return image.rotate(30);
      }).catch(err => {
        console.log(err);
      });
      
    return JSON.stringify(await image.getBufferAsync(image.getMIME()));
}


module.exports = {
    process_image:process_image
}