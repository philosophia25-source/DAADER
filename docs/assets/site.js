const lang = document.body.dataset.lang || 'fa';
const labels = {
 fa: {wa:'گفت‌وگو در واتس‌اپ',email:'ارسال ایمیل',msg:'سلام، برای بررسی موضوع حقوقی خود از سایت دادر پیام می‌دهم.'},
 ar: {wa:'المحادثة عبر واتساب',email:'إرسال بريد إلكتروني',msg:'مرحباً، أتواصل عبر موقع دادر لدراسة مسألة قانونية.'},
 en: {wa:'Chat on WhatsApp',email:'Send an email',msg:'Hello, I am contacting you through DAADER about a legal matter.'}
};
const dialog = document.querySelector('#contact-dialog');
let config = {};
fetch('/assets/contact.json').then(r => r.ok ? r.json() : {}).then(data => {
 config = data;
 const options = document.querySelector('#contact-options');
 const number = String(config.whatsapp || '').replace(/[^0-9]/g,'');
 if (!number && !config.email) return;
 options.replaceChildren();
 if(number){const link=document.createElement('a');link.className='button whatsapp-button';link.href='https://wa.me/'+number+'?text='+encodeURIComponent(labels[lang].msg);link.target='_blank';link.rel='noopener noreferrer';link.textContent=labels[lang].wa;options.append(link);}
 if(config.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email)){const link=document.createElement('a');link.className='button sidebar-contact';link.href='mailto:'+config.email;link.textContent=labels[lang].email;options.append(link);}
}).catch(()=>{});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
const menu = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');
menu.addEventListener('click',()=>{const open=navigation.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'){navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');}});
