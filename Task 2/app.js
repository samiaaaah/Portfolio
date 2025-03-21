function colorinput(){
    const colorpicked=document.getElementById('colorpicker')
    const colorselected=colorpicked.value
    const btn=document.querySelector('button')
    document.body.style.backgroundColor = colorselected;
}
