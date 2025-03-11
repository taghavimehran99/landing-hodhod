const faq=document.getElementById('mor-faq')
const btnMor=document.getElementById('btn-faq')


btnMor.addEventListener("click",(e)=>{
    e.preventDefault();
    faq.className="mor-faq-show";
})



document.addEventListener('DOMContentLoaded', function () {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const accordionItem = this.closest('.accordion-item');
        accordionItem.classList.toggle('active'); // اضافه یا حذف کلاس active
      });
    });
  });







