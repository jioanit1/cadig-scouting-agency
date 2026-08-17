
document.addEventListener('DOMContentLoaded',()=>{
 const btn=document.querySelector('.menu-btn'), panel=document.querySelector('.mobile-panel');
 if(btn&&panel) btn.addEventListener('click',()=>panel.classList.toggle('open'));
 document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{
   const f=b.dataset.filter;
   document.querySelectorAll('[data-kind]').forEach(c=>c.style.display=(f==='all'||c.dataset.kind.includes(f))?'block':'none');
 }));
});

document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('[data-tabs]').forEach(group=>{
   const buttons=group.querySelectorAll('.tab-btn');
   const panels=group.querySelectorAll('.tab-panel');
   buttons.forEach(btn=>btn.addEventListener('click',()=>{
     buttons.forEach(b=>b.classList.remove('active'));
     panels.forEach(p=>p.classList.remove('active'));
     btn.classList.add('active');
     const target=group.querySelector('#'+btn.dataset.tab);
     if(target) target.classList.add('active');
   }));
 });
 document.querySelectorAll('[data-search-target]').forEach(input=>{
   const target=document.querySelector(input.dataset.searchTarget);
   if(!target) return;
   input.addEventListener('input',()=>{
     const q=input.value.toLowerCase().trim();
     target.querySelectorAll('tbody tr').forEach(row=>{
       row.style.display=row.innerText.toLowerCase().includes(q)?'':'none';
     });
   });
 });
});
