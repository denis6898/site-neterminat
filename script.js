function checkTheme() {
    const savedTheme = localStorage.getItem('siteTheme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }

    const servicesSection = document.querySelector('.services-section');
    if (document.body.classList.contains('dark-theme') && servicesSection) {
        servicesSection.classList.add('dark-theme');
    } else if (servicesSection) {
        servicesSection.classList.remove('dark-theme');
    }
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

