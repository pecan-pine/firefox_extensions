document.body.style.border = "5px solid red";

url = window.location.href

split_url = url.split("//")[1].split(".")
prefix = split_url[0]
end_url = split_url.slice(1).join('.')

if (prefix = "www"){
    //window.alert(prefix)
    //window.alert(split_url.slice(1).join('.'))
    //window.alert("https://old." + end_url)
    window.location.replace("https://old." + end_url)
}



