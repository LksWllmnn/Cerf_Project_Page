
// TODO: edit your page here, not in the html file
// head
var TITLE = "Object recognition in radiance fields: A comparison of language embedding methods (Work in Progress)";
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
var hideGithub = false;
var GITHUB_LINK = "https://github.com/LksWllmnn/finetune_eval_th";
var hideArxiv = true;
var ARXIV_LINK = "tbd";
// teaser image or video
var showTeaserVideo = true;  // preferable exclusive
var showTeaserImage = false; // either video or image
var TEASER_VIDEO_LINK = "static/videos/output.mp4";
var TEASER_IMAGE_LINK = "static/images/noteaser.jpg";
var TEASER_TEXT = "Visual highlighting of multiple Buildings in a prototypical HFU-Campus 3D-Scene.";
// abstract
var ABSTRACT = "<p>In this work, different concepts are compared with which objects with abstract names in 3D scenes can be semantically ``recognized`` and visually highlighted. The comparison is made in the context of a prototypical representation of the Furtwangen campus in a 3D scene. The goal is for the techniques to visually highlight or mark the corresponding objects based on the abstract names that are entered by the user as text. For this purpose, the methods <u><a href='https://arxiv.org/abs/2303.09553'>LeRF</a></u> and <u><a href='https://arxiv.org/abs/2405.15518'>Feature Splatting</a></u>, which embed language features in a 3D radiance field, were trained with <u><a href='https://arxiv.org/abs/1703.06870'>Mask R-CNN</a></u> and a combination of <u><a href='https://arxiv.org/abs/1512.03385'>ResNet</a></u> and <u><a href='https://arxiv.org/abs/2304.02643'>SAM</a></u> segmentation compared. The latter extracts objects from 2D images. For this purpose, data sets were generated that consist of RGB and semantically segmented images of a virtual scenery that conceptually represents the Furtwangen campus. The respective models were trained and evaluated with these data. The images containing the marked objects were evaluated based on the IoU value and the F1 score. The analysis showed that <a>Mask R-CNN</a> achieves significantly better results with small data sets than alternative methods. However, since semantic segmentation for real-world data poses significant challenges, concepts for performing highlighting for the real campus as a Radiance Field were presented at the end of the paper.</p>"

// image carousel
var showImageCarousel = false;
var icImageLinks = ["static/images/LangSplat_Horizon.png", "static/images/Fuwa_B-Building_0000.png"]; 
var icImageDescriptions = ["LangSplat-scene with highlighted horizon", "Single Image of the B-Building to finetune CLIP"]; 

// image carousel Diagrams
var IMAGE_CAROUSEL_HEADING = "Concepts"
var showImageCarousel_Diagrams = true;
var icImageLinks_Diagrams = ["static/images/lerf_16z8.png", "static/images/fs_16z8.png", "static/images/resnet_1080.png", "static/images/mrcnn_16z8.png"]; 
var icImageDescriptions_Diagrams = [ 
    "The scheme illustrates the procedure of the LeRF approach. First, a CLIP model is generated and the weights integrated into the LeRF lite technique. Subsequently, the Radiance Field is trained using the LeRF lite technique.", 
    "The scheme illustrates the procedure of the Feature Splatting approach. First, a CLIP model is generated and the weights are inserted into the Feature Splatting technique. Subsequently, the Radiance Field is trained using this technique and the images are rendered. Furthermore, a cache is generated for the language embeddings.",
    "The diagram illustrates the ResNet + SAM approach. First, a ResNet model is finetuned. At the same time, a Gsplat model is trained in Nerfstudio. The rendered images are then segmented into different segments using SAM. These segments are classified using ResNet and finally reassembled into one image.",
    "The diagram illustrates the procedure of the Mask R-CNN approach. First, a Mask R-CNN model is finetuned. Separately, a Gsplat model is trained in Nerfstudio. Afterwards, the rendered images are analyzed with Mask R-CNN and the masks are generated."
]; 

// YouTube video
var hideYouTubeVideo = true;
var YOUTUBE_LINK = "https://www.youtube.com/embed/W3I3kAg2J7w?si=oVCFsIV7Xg_l8Z88"
// Video carousel
var showVideoCarousel = true;
var VIDEO_CAROUSEL_HEADING = "Examples of visual highlighting with LeRF and finetuned CLIP model, Feature Splatting, ResNet + SAM and M-RCNN"
var vcVideoLinks = ["static/videos/lerf_vid.mp4", "static/videos/fs_vid.mp4", "static/videos/resnet_vid.mp4", "static/videos/mrcnn_vid.mp4"];
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
    // imageCarouselHeading.id= 'IMAGE_CAROUSEL_HEADING';
    // imageCarouselHeading.className= 'title is-3';
    // imageCarouselHeading.textContent = IMAGE_CAROUSEL_HEADING;
    // carouselContainer_Diagrams.appendChild(imageCarouselHeading);
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



