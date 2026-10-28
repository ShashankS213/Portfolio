(function(){
  var btn=document.querySelector('.nav-toggle'),list=document.getElementById('nav-list');
  if(!btn||!list)return;
  function close(){list.classList.remove('open');btn.setAttribute('aria-expanded','false');}
  btn.addEventListener('click',function(){var o=list.classList.toggle('open');btn.setAttribute('aria-expanded',o);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&list.classList.contains('open')){close();btn.focus();}});
  list.addEventListener('click',function(e){if(e.target.tagName==='A')close();});
})();
