const vid = document.querySelector('video')
const vidSrc = vid.querySelector('source')
const bRoll = document.querySelector('#bRoll');
// const vid2 = document.querySelector('video')

// vidSrc.setAttribute('src', path(0));
// vid.load();
// vid.play();
let ticker = 0;
updateSrc(vid, vidSrc, path(ticker++))
vid.addEventListener('ended', ()=>{
    console.log('ended')
    updateSrc(vid, vidSrc, path(ticker++))
})
function path(ind){
    const videoSources = [
        'clashes',
        'coffeeShop',
        'floating',
        'neistat',
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