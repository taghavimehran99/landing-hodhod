




// انتخاب المان‌ها
const toggleLink = document.getElementById('toggleLink');
const targetElement = document.getElementById('targetElement');

// اضافه کردن رویداد کلیک به تگ <a>
toggleLink.addEventListener('click', function(event) {
    event.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک

    // بررسی وجود کلاس 'highlight' روی المان
    if (targetElement.classList.contains('highlight')) {
        // اگر کلاس وجود داشت، آن را حذف کن
        targetElement.classList.remove('highlight');
    } else {
        // اگر کلاس وجود نداشت، آن را اضافه کن
        targetElement.classList.add('highlight');
    }
});


