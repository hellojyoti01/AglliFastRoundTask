
function myFunction(el) {
    
    el.classList.toggle('change')
    document.getElementsByClassName('sidebar-content')[0].classList.toggle('sidebar-toogle')
    //console.log("sidebarWork")
}

fetch('./main.json').then((data) => {
    
    const d = data.json()
    d.then((dat) => {
        // console.log("data called ")
        document.getElementsByClassName('buttom-heading-colomn-one')[0].innerHTML = dat.tasks[0].assets[0].display_asset_reflection
        
        document.getElementsByClassName('doc-pdf')[0].src = dat.tasks[0].assets[3].display_asset_docs

        document.getElementsByClassName('butun-gif')[0].src = dat.tasks[0].assets[4].display_asset_image

        document.getElementsByClassName('audio')[0].src = dat.tasks[0].assets[7].display_asset_url

        document.getElementsByClassName('audio-p')[0].innerHTML = dat.tasks[0].assets[7].asset_description

        document.getElementsByClassName('video')[0].src = dat.tasks[0].assets[8].display_asset_video
        
    })
}).catch((e) => {
    throw new Error("Somthing wrong Fetch In Api ")
})