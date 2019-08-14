import anime from 'animejs'
const vid = document.querySelector('video')
const vidSrc = vid.querySelector('source')
const bRoll = document.querySelector('#bRoll');
const tabs = document.querySelectorAll('.categories > li');
const tabBase = document.querySelector('.categories');
let ticker = 0;

function path(ind){
    // 'floating',
    // 'clashes',
    const videoSources = [
        'poeticAnime',
        'animeRap',
        'neistat',
        'coffeeShop',
        'shinjiSwell_ImSorry',
    ]
    console.log(`./images/${videoSources[ind % videoSources.length]}.webm`)
    return `./images/${videoSources[ind % videoSources.length]}.webm`
}

function updateSrc(videoElm, sourceElm, srcPath){
    sourceElm.setAttribute('src', srcPath);
    videoElm.load();
    videoElm.play();

}

function clickHandler(elm){
    console.log(elm)
    if(elm.classList.contains('revealed')){
        tabBase.classList.remove('revealed');
        elm.classList.remove('revealed');
        return false;
    }
    tabs.forEach(turnOff=>turnOff.classList.remove('revealed'))
    elm.classList.add('revealed');
    tabBase.classList.add('revealed');
    anime({
        targets: '.revealded > svg > #border',
        d: [
            { value: 'M 300 0 L 300 0 L 0 0 L 0 100 L 300 100 L 300 0' },
            { value: 'M 800 0 L 800 0 L 0 0 L 0 100 L 300 100 L 300 0' },
            { value: 'M 800 600 L 800 0 L 0 0 L 0 100 L 300 100 L 300 0' },
            // { value: 'M 800 1200 L 800 0 L 0 100 L 300 100 L 300 0' },
            // { value: 'M 800 1200 L 0 0 L 0 100 L 300 100 L 300 0' },
            // { value: 'M 800 0 L 0 0 L 0 100 L 300 100 L 0 100' },
        ],
        easing: 'easeOutQuad',
        duration: 1000,
        loop: true,
        direction: 'alternate'
    });
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

tabs.forEach((elm)=>{
    elm.addEventListener('mouseup', (e)=>clickHandler(elm))
})
document.addEventListener('DOMContentLoaded', run)