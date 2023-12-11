function checkTheme() {
    const savedTheme = localStorage.getItem('siteTheme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

function activateDarkMode() {
    document.body.classList.add('dark-theme');
    localStorage.setItem('siteTheme', 'dark');
    checkTheme();
}

function showServiceInfo(infoId) {
    const allInfos = document.querySelectorAll('.service-info');
    allInfos.forEach(info => info.classList.remove('active'));

    const selectedInfo = document.getElementById(infoId);
    selectedInfo.classList.add('active');
}

function redirectToSite(url) {
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', checkTheme);


