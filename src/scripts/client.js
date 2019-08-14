import anime from 'animejs'
const vid = document.querySelector('video')
const vidSrc = vid.querySelector('source')
const bRoll = document.querySelector('#bRoll');
const tabs = document.querySelectorAll('.mainTabs > li');
const tabBase = document.querySelector('.baseMenu');
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
        console.log(elm.classList)
        elm.classList.remove('revealed');
        return false;
    }
    
    // One at a time
    tabs.forEach(turnOff=>turnOff.classList.remove('revealed'))

    // Clicked a hidden, so activate with proper submenus
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

function run(){
    updateSrc(vid, vidSrc, path(ticker++))
    vid.addEventListener('ended', ()=>{
        console.log('ended')
        updateSrc(vid, vidSrc, path(ticker++))
    })
}

for(let i = 0; i < tabs.length; i++){
    tabs[i].classList.add(`${i}`);
    tabs[i].addEventListener('mouseup', (e)=>clickHandler(tabs[i]))
}

document.addEventListener('DOMContentLoaded', run)