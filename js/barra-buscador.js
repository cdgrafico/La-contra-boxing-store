function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'flex')
       e.style.display = 'none';
    else
       e.style.display = 'flex';
 }