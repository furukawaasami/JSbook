'use strict';

const lang = document.querySelector('html').lang;

if (lang === 'ja') {
    document.querySelector('option[value="5-2_ja.html"]').selected = true;
} else if(lang ==='en') {
    document.querySelector('option[value="5-2_en.html"]').selected = true;
} else if(lang === 'zh') {
    document.querySelector('option[value="5-2_zh.html"]').selected = true;
}

document.getElementById('form').select.onchange = function() {
    location.href = document.getElementById('form').select.value;
}