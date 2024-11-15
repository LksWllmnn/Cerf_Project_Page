
// TODO: edit your page here, not in the html file
// head
var TITLE = "CeRF - Context specific language embedded visual navigation Support in Radiance Fields";
var FIRST_AUTHOR = "Lukas Willmann";
var FIRST_AUTHOR_LINK = "tbd";
var PROGRAM_NAME = "Master Thesis 2024/2025";
var SUPERVISOR = "Prof. Dr. Uwe Hahne";
var SUPERVISOR_LINK = "https://www.hs-furtwangen.de/zukunft-verbinden/personen/profil/2932-uwehahne";
var SECOND_SUPERVISOR = "Prof. Dr. Thomas Schlegel";
var SECOND_SUPERVISOR_LINK = "https://www.hs-furtwangen.de/zukunft-verbinden/personen/profil/3129-thomasschlegel";
// link buttons
var hideThesis = true;
var THESIS_LINK = "tbd";
var hideSupplementary = true;
var SUPPLEMENTARY_LINK = "tbd";
var hideGithub = true;
var GITHUB_LINK = "tbd";
var hideArxiv = true;
var ARXIV_LINK = "tbd";
// teaser image or video
var showTeaserVideo = true;  // preferable exclusive
var showTeaserImage = false; // either video or image
var TEASER_VIDEO_LINK = "static/videos/B_Building.mp4";
var TEASER_IMAGE_LINK = "static/images/noteaser.jpg";
var TEASER_TEXT = "Visual highlighting in a 3D-Scene of a specific building using the text input “B-Building”.";
// abstract
var ABSTRACT = "<p>In recent years, NeRF and Gaussian Splatting techniques have gained significant traction within the field of computer vision. Numerous academic studies have already extended these techniques. Among them, methods such as LeRF and LangSplat have successfully integrated language with 3D scenes and their geometry.</p><p>This study explores how a visual orientation aid can be effectively implemented within a radiance field scene representing the Furtwangen campus. The concept of the campus scene involves users standing before a screen displaying the scene, through which they can navigate interactively.</p><p>Building upon LeRF, LangSplat, and additional image recognition techniques, these methods are applied to a dummy dataset and evaluated for their quality and suitability in the specific use case of navigation within a radiance field scene. The findings indicate that LeRF is less suitable than LangSplat, as it is based on NeRF and thus does not achieve the fast rendering results required for this application. While LangSplat produces high-quality results, the rendering time remains substantial, precluding the creation of a live image within a navigable scene. However, individual still frames of the scene can be generated. Other image recognition techniques that do not employ 3D language embedding are more easily adaptable to various software tools, as they are not reliant on radiance field training. However, they encounter challenges in accurately capturing objects within such scenes.</p>"

// image carousel
var showImageCarousel = false;
var icImageLinks = ["static/images/LangSplat_Horizon.png", "static/images/Fuwa_B-Building_0000.png"]; 
var icImageDescriptions = ["LangSplat-scene with highlighted horizon", "Single Image of the B-Building to finetune CLIP"]; 

// image carousel Diagrams
var showImageCarousel_Diagrams = true;
var icImageLinks_Diagrams = ["static/images/LangSplat-Schema_s.png", "static/images/Lerf-Schema_s.png", "static/images/ResNet-Schema_s.png"]; 
var icImageDescriptions_Diagrams = [
    "The LangSplat-Schema, showing the generation of the Dataset, finetuning of the CLIP-Model and training of the Gaussian Splat and Langsplat. The Result are three images of the same Frame with different Detail segmentation.", 
    "The LeRF-Schema, showing the generation of the Dataset, finetuning of the CLIP-Model and training of the LeRF Model in NerfStudio. Result is a Frame from the rendered Video with a clear Focus un the B-Building", 
    "The ResNet-Schema, showing the generation of a Video with Gaussian Splatting and identification of the fitting mask with a finetuned ResNet50 Model"]; 

// YouTube video
var hideYouTubeVideo = true;
var YOUTUBE_LINK = "https://www.youtube.com/embed/W3I3kAg2J7w?si=oVCFsIV7Xg_l8Z88"
// Video carousel
var showVideoCarousel = true;
var VIDEO_CAROUSEL_HEADING = "Examples of visual highlighting with LeRF and finetuned CLIP model"
var vcVideoLinks = ["static/videos/C_Building_s.mp4", "static/videos/H_Building_s.mp4", "static/videos/Z_Building_s.mp4", "static/videos/Vergleich_B-Building.mp4"];
// An embedded PDF document (could be a poster)
var hidePDF = true;
var PDF_HEADING = "A PDF document"
var PDF_LINK = 'static/pdfs/sample.pdf';
// BibTeX code
var hideBibTeX = false;
var BIBTEX_TITLE = "BibTeX"
var BIBTEX_CODE = 'Copy your BibTeX code here';

// Code to include the variable in the HTML (DOM manipulation) - no need to edit
// head information
document.getElementById('TITLE').innerHTML = TITLE;
document.getElementById('FIRST_AUTHOR').innerHTML = FIRST_AUTHOR;
document.getElementById('FIRST_AUTHOR').setAttribute("href", FIRST_AUTHOR_LINK);
document.getElementById('PROGRAM_NAME').innerHTML = PROGRAM_NAME;
document.getElementById('SUPERVISOR').innerHTML = SUPERVISOR;
document.getElementById('SUPERVISOR').setAttribute("href", SUPERVISOR_LINK);
document.getElementById('SECOND_SUPERVISOR').innerHTML = SECOND_SUPERVISOR;
document.getElementById('SECOND_SUPERVISOR').setAttribute("href", SECOND_SUPERVISOR_LINK);
// link buttons
document.getElementById('THESIS').hidden = hideThesis;
document.getElementById('THESIS_LINK').setAttribute("href", THESIS_LINK);
document.getElementById('SUPPLEMENTARY').hidden = hideSupplementary;
document.getElementById('SUPPLEMENTARY_LINK').setAttribute("href", SUPPLEMENTARY_LINK);
document.getElementById('GITHUB').hidden = hideGithub;
document.getElementById('GITHUB_LINK').setAttribute("href", GITHUB_LINK);
document.getElementById('ARXIV').hidden = hideArxiv;
document.getElementById('ARXIV_LINK').setAttribute("href", ARXIV_LINK);
// teaser video or image
if (showTeaserVideo) {
    document.getElementById('tree').hidden = false;
    document.getElementById('TEASER_VIDEO').setAttribute("src", TEASER_VIDEO_LINK);
    document.getElementById('TEASER_IMAGE').hidden = true;
} else if (showTeaserImage) {
    document.getElementById('TEASER_IMAGE').hidden = false;
    document.getElementById('TEASER_IMAGE').setAttribute("src", TEASER_IMAGE_LINK);
    document.getElementById('tree').hidden = true;
} else {
    document.getElementById('tree').hidden = true;
    document.getElementById('TEASER_IMAGE').hidden = false;
    document.getElementById('TEASER_IMAGE').setAttribute("src", "static/images/noteaser.jpg");
}
document.getElementById('TEASER_TEXT').innerHTML = TEASER_TEXT;
// abstract
document.getElementById('ABSTRACT').innerHTML = ABSTRACT;

// image carousel
if (showImageCarousel) {
    var carouselSection = document.getElementById('IMAGE_CAROUSEL');
    var carouselInner = document.createElement('div');
    carouselInner.className = 'hero-body';
    carouselSection.appendChild(carouselInner);
    var carouselContainer = document.createElement('div');
    carouselContainer.className = 'container';
    carouselInner.appendChild(carouselContainer);
    var carouselResults = document.createElement('div');
    carouselResults.id = 'results-carousel';
    carouselResults.className = 'carousel results-carousel';
    carouselContainer.appendChild(carouselResults);
    for (var i = 0; i < icImageLinks.length; i++) {
        var carouselItem = document.createElement('div');
        carouselItem.className = 'item';

        var img = document.createElement('img');
        img.src = icImageLinks[i];
        img.alt = icImageDescriptions[i];

        var caption = document.createElement('h2');
        caption.className = 'subtitle has-text-centered';
        caption.innerHTML = icImageDescriptions[i];

        carouselItem.appendChild(img);
        carouselItem.appendChild(caption);
        carouselResults.appendChild(carouselItem);
    }
}

// image carousel Diagram
if (showImageCarousel_Diagrams) {
    console.log("Diagrams!!")
    var carouselSection_Diagrams = document.getElementById('IMAGE_CAROUSEL_Diagrams');
    var carouselInner_Diagrams = document.createElement('div');
    carouselInner_Diagrams.className = 'hero-body';
    carouselSection_Diagrams.appendChild(carouselInner_Diagrams);
    var carouselContainer_Diagrams = document.createElement('div');
    carouselContainer_Diagrams.className = 'container';
    carouselInner_Diagrams.appendChild(carouselContainer_Diagrams);
    var carouselResults_Diagrams = document.createElement('div');
    carouselResults_Diagrams.id = 'results-carousel_diagrams';
    carouselResults_Diagrams.className = 'carousel results-carousel';
    carouselContainer_Diagrams.appendChild(carouselResults_Diagrams);
    for (var i = 0; i < icImageLinks_Diagrams.length; i++) {
        var carouselItem_Diagrams = document.createElement('div');
        carouselItem_Diagrams.className = 'item';

        var img_Diagrams = document.createElement('img');
        img_Diagrams.src = icImageLinks_Diagrams[i];
        img_Diagrams.alt = icImageDescriptions_Diagrams[i];

        var caption_Diagrams = document.createElement('h2');
        caption_Diagrams.className = 'subtitle has-text-centered';
        caption_Diagrams.innerHTML = icImageDescriptions_Diagrams[i];

        carouselItem_Diagrams.appendChild(img_Diagrams);
        carouselItem_Diagrams.appendChild(caption_Diagrams);
        carouselResults_Diagrams.appendChild(carouselItem_Diagrams);
    }
}
// YouTube video
try{
    document.getElementById('YOUTUBE_LINK').setAttribute("src", YOUTUBE_LINK);
    document.getElementById('YOUTUBE').hidden = hideYouTubeVideo;
} catch (e) {
    console.log("no Youtube element")
}

// Video carousel
if (showVideoCarousel) {
    var videoCarouselSection = document.getElementById('VIDEO_CAROUSEL');
    var videoCarouselInner = document.createElement('div');
    videoCarouselInner.className = 'hero-body';
    videoCarouselSection.appendChild(videoCarouselInner);
    var videoCarouselContainer = document.createElement('div');
    videoCarouselContainer.className = 'container';
    videoCarouselInner.appendChild(videoCarouselContainer);
    var videoCarouselHeading = document.createElement('h2');
    videoCarouselHeading.id= 'VIDEO_CAROUSEL_HEADING';
    videoCarouselHeading.className= 'title is-3';
    videoCarouselHeading.textContent = VIDEO_CAROUSEL_HEADING;
    videoCarouselContainer.appendChild(videoCarouselHeading);
    var videoCarouselResults = document.createElement('div');
    videoCarouselResults.id = 'results-carousel';
    videoCarouselResults.className = 'carousel results-carousel';
    videoCarouselContainer.appendChild(videoCarouselResults);

    for (var i = 0; i < vcVideoLinks.length; i++) {
        var videoCarouselItem = document.createElement('div');
        videoCarouselItem.className = 'item item-video' + (i + 1);

        var video = document.createElement('video');
        video.poster = '';
        video.id = 'video' + (i + 1);
        video.autoplay = true;
        video.controls = true;
        video.muted = true;
        video.loop = true;
        video.height = '100%';

        var source = document.createElement('source');
        source.src = vcVideoLinks[i];
        source.type = 'video/mp4';

        video.appendChild(source);
        videoCarouselItem.appendChild(video);
        videoCarouselResults.appendChild(videoCarouselItem);
    }
}
// PDF preview
try{
    document.getElementById('PDF_PREVIEW').hidden = hidePDF;
    document.getElementById('PDF_HEADING').innerHTML = PDF_HEADING;
    document.getElementById('PDF_LINK').setAttribute('src',PDF_LINK);
} catch(e) {
    console.log("no PDF Element")
}


// BIBTEX
document.getElementById('BIBTEX').hidden = hideBibTeX;
document.getElementById('BIBTEX_TITLE').innerHTML = BIBTEX_TITLE;
document.getElementById('BIBTEX_CODE').innerHTML = BIBTEX_CODE;



