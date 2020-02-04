

function clickListener() {
    document.getElementById('copy_btn').select();
    document.execCommand('copy');
}

document.getElementById('copy_btn').addEventListener('click', clickListener);