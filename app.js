// document.addEventListener('keydown',(e)=>{
//     console.log('code',e.code)
//     console.log('key',e.key)
//     console.log('keycode',e.keyCode)

// })
const insert=document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`
    <div class='key'>
        ${e.code}
        <small>event.code</small>
    </div>
    <div class='key'>
        ${e.key}
        <small>event.key</small>
    </div>
    <div class='key'>
        ${e.keyCode}
        <small>event.keyCode</small>
    </div>

    `



    
})