const vid = document.querySelector('video')
const vidSrc = vid.querySelector('source')
const bRoll = document.querySelector('#bRoll');
let ticker = 0;

function path(ind){
    const videoSources = [
        'neistat',
        'coffeeShop',
        'floating',
        'clashes',
        'poeticAnime',
        'animeRap'
    ]
    console.log(`./images/${videoSources[ind % videoSources.length]}.webm`)
    return `./images/${videoSources[ind % videoSources.length]}.webm`
}

function updateSrc(videoElm, sourceElm, srcPath){
    sourceElm.setAttribute('src', srcPath);
    videoElm.load();
    videoElm.play();

}

//                                                                      
//                                              iiii                    
//                                             i::::i                   
//                                              iiii                    
//                                                                      
//     mmmmmmm    mmmmmmm     aaaaaaaaaaaaa   iiiiiii nnnn  nnnnnnnn    
//   mm:::::::m  m:::::::mm   a::::::::::::a  i:::::i n:::nn::::::::nn  
//  m::::::::::mm::::::::::m  aaaaaaaaa:::::a  i::::i n::::::::::::::nn 
//  m::::::::::::::::::::::m           a::::a  i::::i nn:::::::::::::::n
//  m:::::mmm::::::mmm:::::m    aaaaaaa:::::a  i::::i   n:::::nnnn:::::n
//  m::::m   m::::m   m::::m  aa::::::::::::a  i::::i   n::::n    n::::n
//  m::::m   m::::m   m::::m a::::aaaa::::::a  i::::i   n::::n    n::::n
//  m::::m   m::::m   m::::ma::::a    a:::::a  i::::i   n::::n    n::::n
//  m::::m   m::::m   m::::ma::::a    a:::::a i::::::i  n::::n    n::::n
//  m::::m   m::::m   m::::ma:::::aaaa::::::a i::::::i  n::::n    n::::n
//  m::::m   m::::m   m::::m a::::::::::aa:::ai::::::i  n::::n    n::::n
//  mmmmmm   mmmmmm   mmmmmm  aaaaaaaaaa  aaaaiiiiiiii  nnnnnn    nnnnnn
//                                                                      
//           

function run(){
    updateSrc(vid, vidSrc, path(ticker++))
    vid.addEventListener('ended', ()=>{
        console.log('ended')
        updateSrc(vid, vidSrc, path(ticker++))
    })
}

document.addEventListener('DOMContentLoaded', run)