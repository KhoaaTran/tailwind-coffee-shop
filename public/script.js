const topMenu = document.getElementById('cf-top-menu')
const toggleTopMenuIcon = document.getElementById('cf-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
    if(toggleTopMenuIcon.contains(e.target)) {
        // Click to toggle top menu icon 
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('cf-top-menu-expanded')
    }
    else {
        topMenu.classList.add('hidden')
    }
})

