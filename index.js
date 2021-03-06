const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// sidebar
menuBtn.addEventListener('click',()=>{
    sideMenu.style.display = 'block';
})
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display = 'none';
})

//day-night mode
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

//table
Tables.forEach(table => {
    const tr = document.createElement('tr');
    const trContent = 
        `
        <td>${table.productName}</td>
        <td>${table.productNumber}</td>
        <td>${table.paymentStatus}</td>
        <td class="${table.shipping === 'To Start' ? 'danger' : table.shipping === 'In Process' ? 'warning' : 'primary' }">${table.shipping}</td>
        <td class="primary">Details</td>
        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})