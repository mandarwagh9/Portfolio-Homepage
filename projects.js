// projects.js

const projects = [
    {
        "title": "Vadapav Mov Link Scraper",
        "desc": "The Vadapav.Mov Link Scraper is a Python-based tool designed to scrape and extract movie links from the website with just a link and save it to .txt file.",
        "img": "https://github.com/mandarwagh9/Portfolio-Homepage/raw/main/thumbnails/VMPS.PNG",
        "link": "https://github.com/mandarwagh9/vadapav-mov-link-scrape"
    },
    {
        "title": "IMAGE SEGMENTING USING SAM2",
        "desc": "An application that utilizes the SAM2 model for object detection and segmentation on uploaded images.",
        "img": "https://github.com/mandarwagh9/Portfolio-Homepage/raw/main/thumbnails/sam2.PNG",
        "link": "https://github.com/mandarwagh9/Image-segmenting-using-SAM2"
    },
    {
        "title": "SPACE IMAGE'S SEARCH ENGINE",
        "desc": "An engine to Search, view and download Space images using the NASA OPEN API.",
        "img": "https://github.com/mandarwagh9/Portfolio-Homepage/raw/main/thumbnails/5.PNG",
        "link": "https://github.com/mandarwagh9/NASA-IMAGE-SEARCH-ENGINE"
    },
    {
        "title": "AI Face Swapper",
        "desc": "An AI-powered application for swapping faces between images using an external API.",
        "img": "https://github.com/mandarwagh9/Portfolio-Homepage/raw/main/thumbnails/4.PNG",
        "link": "https://github.com/mandarwagh9/FACE-SWAP-WEBSITE"
    },
    {
        "title": "MHT-CET Rank Predictor",
        "desc": "The application predicts students ranks based on their percentile scores Certainly!",
        "img": "https://github.com/mandarwagh9/Portfolio-Homepage/raw/main/thumbnails/1.PNG",
        "link": "https://mhtcet-rank-predictor.vercel.app/"
    },
    {
        "title": "Personal Portfolio Website",
        "desc": "A website dedicated to Amazing projects I've made and Currently working on!",
        "img": "https://github.com/mandarwagh9/Portfolio-Homepage/raw/main/thumbnails/3.PNG",
        "link": "https://github.com/mandarwagh9/Portfolio-Homepage/"
    }
];

window.addEventListener('DOMContentLoaded', (event) => {
    const projectSection = document.querySelector('.section');

    projects.forEach(project => {
        const projectWrapper = document.createElement('a');
        projectWrapper.classList.add('project-wrapper');
        projectWrapper.href = project.link;
        projectWrapper.target = '_blank';

        const projectThumbnail = document.createElement('img');
        projectThumbnail.classList.add('project-thumbnail');
        projectThumbnail.src = project.img;

        const projectInfo = document.createElement('div');
        projectInfo.classList.add('project-info');

        const projectTitle = document.createElement('div');
        projectTitle.classList.add('project-title');
        projectTitle.textContent = project.title;

        const projectDesc = document.createElement('div');
        projectDesc.classList.add('project-desc');
        projectDesc.textContent = project.desc;

        projectInfo.appendChild(projectTitle);
        projectInfo.appendChild(projectDesc);
        projectWrapper.appendChild(projectThumbnail);
        projectWrapper.appendChild(projectInfo);
        projectSection.appendChild(projectWrapper);
    });
});
