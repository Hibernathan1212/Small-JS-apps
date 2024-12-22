const resultImg = document.getElementById("resultImg");
const Download = document.getElementById("Download");

const generateMockup = () => {
    const websiteAddress = document.getElementById("websiteAddress").value;
    const mockup = 'https://2s9e3bif52.execute-api.eu-central-1.amazonaws.com/production/screenshot?url=' + websiteAddress + '&color=' + bgColor;
    resultImg.src = mockup;

    Download.addEventListener("click", () => {
        window.open(mockup);
    });
};