/* Phone is stored reversed and base64-encoded, and only assembled when a visitor clicks. */
document.querySelectorAll('[data-phone]').forEach(function(b){
  b.addEventListener('click',function(){
    var n=atob(b.getAttribute('data-phone')).split('').reverse().join(''),a=document.createElement('a');
    a.href='tel:'+n.replace(/[^+\d]/g,'');a.textContent=n;b.replaceWith(a);
  });
});
