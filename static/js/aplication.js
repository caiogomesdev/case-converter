const appText = document.getElementById("appText")

async function c_copy(){
    if (IsNullOrWhiteSpace(appText.value)) return;
    await navigator.clipboard.writeText(appText.value)
}
async function c_paste(){
    appText.value += await navigator.clipboard.readText()
}
function c_clear(){
    appText.value = ""
}
function c_lowercase(){
    appText.value = appText.value.toLowerCase()
}
function c_uppercase(){
    appText.value = appText.value.toUpperCase()
}
function c_camelcase(){
    let text = appText.value
    let arraytext = text.split(/\n/g)
    text = ''
    for(let i = 0 ; i < arraytext.length ; i++){
        text += arraytext[i].toLowerCase().replace(/\s\w/g, (m)=> m[1].toUpperCase()).replace(/^\w/g,(t)=> t = t.toLowerCase())
        if (i != arraytext.length-1) text += '\n'
    }
    appText.value = text
}
function c_pascalcase(){
    let text = appText.value
    let arraytext = text.split(/\n/g)
    text = ''
    for(let i = 0 ; i < arraytext.length ; i++){
        text += arraytext[i].toLowerCase().replace(/\s\w/g, (m)=> m[1].toUpperCase()).replace(/^\w/g,(t)=> t = t.toUpperCase())
        if (i != arraytext.length-1) text += '\n'
    }
    appText.value = text
}
function c_snakecase(){
    let text = appText.value
    let arraytext = text.split(/\n/g)
    text = ''

    for(let i = 0 ; i < arraytext.length ; i++){
        text += arraytext[i].replace(/\W/g, (t) => t = '_')
        if (i != arraytext.length-1) text += '\n'
    }
    appText.value = text
}
function IsNullOrWhiteSpace( value) {
    if (value== null) return true;
    return value.replace(/\s/g, '').length == 0;
}