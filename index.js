/* 
    WEB FUNDEMENTALS PROJECT 
        Done By:
        #Mayyar Sakhnini - 202200225.
        #Khadija Abdulla - 202201013.
        #Manar Alsetrawi - 202200412.
        #Ayah Meftah     - 202201592.
        #Alaa Aljamri    - 202201043.

    JavaScript File for the all pages - index.js
*/

//Function for Sign up/Log in process (FORM)//
function register(){
    //Variable delaring + assigning (creation)//
    let popup = document.getElementById("form-modal");
    let image = document.getElementById("form-image");
    let title = document.getElementById("form-title")
    let message = document.getElementById("form-message");
    let first_name = document.getElementById("input1");
    let last_name = document.getElementById("input2");
    let password = document.getElementById("input3");
    let phone_num = document.getElementById("input4");
    let email = document.getElementById("input5");
    
    //Conditions//
    if((first_name.value).length==0 ||
       (last_name.value).length==0 ||
       (password.value).length==0 ||
       (phone_num.value).length==0 ||
       (email.value).length==0){ //checks if any input field is empty
        image.src = "images/icons/error.png";
        title.innerHTML = "Error!";
        message.innerHTML = "Please make sure you have filled all the fields required... please refresh the page & try again :(";
        popup.classList.add("open_pop");
    }

    else if((first_name.value).length<3){ //checks if the first name length is less than 3 
        image.src = "images/icons/error.png";
        title.innerHTML = "Error!";
        message.innerHTML = "First name must contain 3 characters and more, please refresh the page & try again :("; 
        popup.classList.add("open_pop");       
    }

    else if((last_name.value).length<3){ //checks if the last name length is less than 3 
        image.src = "images/icons/error.png";
        title.innerHTML = "Error!";
        message.innerHTML = "Last name must contain 3 characters and more, please refresh the page & try again :("; 
        popup.classList.add("open_pop");
    }

    else if((phone_num.value).length > 8 || (phone_num.value).length < 8){ //checks if the phone number contains less than or more than 8 digits 
        image.src = "images/icons/error.png";
        title.innerHTML = "Error!";
        message.innerHTML = "Phone Number must contain 8 digits only, please refresh the page & try again :(";
        popup.classList.add("open_pop"); 
    }
    else{ //If everything is okay 
        image.src = "images/icons/check.png";
        title.innerHTML = "Success!";
        message.innerHTML = "Your details have been sucessfully registered, \nEnjoy shopping with Us!";
        popup.classList.add("open_pop");
        sendDetails(first_name.value, last_name.value, password.value, phone_num.value, email.value);
        setUsername();
    }
    //clearing input fields
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
    document.getElementById("input5").value = "";
}

//Save details in session storage
function sendDetails(fn, ln, ps, pn, em){
    sessionStorage.setItem("first_name", fn);
    sessionStorage.setItem("last_name", ln);
    sessionStorage.setItem("password", ps);
    sessionStorage.setItem("phone_num", pn);
    sessionStorage.setItem("email", em);
}

//Set username on the pages by getting it from the session storage
function setUsername(){
    document.getElementById("username").innerHTML = sessionStorage.getItem("first_name");
    var username = sessionStorage.getItem("first_name");
    var username_len = username.length;

    if(username.length==0){
        document.getElementById("signup-link").innerHTML = "Sign Up/Log in"; 
    }
    else{
        document.getElementById("signup-link").innerHTML = ""; 
    }
}

//Function for opening the pop-up (modal)
function openModal(product_num){
    //Variable delaring + assigning (creation)//
    var modal = document.getElementById("p-modal");
    var img = document.getElementById("p-modal-image");
    var title = document.getElementById("p-modal-title");
    var description = document.getElementById("p-desc");
    var size = document.getElementById("sizes");
    var price = document.getElementById("p-modal-price");
    var color1 = document.getElementById("color1");
    var color2 = document.getElementById("color2");
    var color3 = document.getElementById("color3");
    
    //Conditions
    switch (product_num) {
        case 'product1':
            img.src = "images/Sofas/ArmchairInRoom.png";
            title.innerText = "Armchair";
            description.innerText = "The seat cushion is filled with high resilience foam that gives good support for your body and quickly regains its original shape when you \nget up.";
            size.src = "images/measurements/armchair_m.png";
            price.innerText = "110 BHD";
            color1.src = "images/Sofas/Armchair1beige.png";
            color2.src = "images/Sofas/Armchair1grey.png";
            color3.src = "images/Sofas/Armchair1black.png";
            break;
        case 'product2':
            img.src = "images/Sofas/TwoInRoom.png";
            title.innerText = "Two Seats Sofa";
            description.innerText = "The fabric cover has a warm and welcoming look, and the seat cushions are filled with high-resilience foam and polyester fibre wadding provide great seating comfort.";
            size.src = "images/measurements/twoSeatsSofa1_m.png";
            price.innerText = "220 BHD";
            color1.src = "images/Sofas/TwoSeatsSofa1lightgreen.png";
            color2.src = "images/Sofas/TwoSeatsSofa1grey.png";
            color3.src = "images/Sofas/TwoSeatsSofa1darkgreen.png";
            break;
        case 'product3':
            img.src = "images/Sofas/CornerInRoom.png";
            title.innerText = "Corner Sofa";
            description.innerText = "It has sections that can be combined as you like into a customised solution for you and your home. You can place the chaise longue section to the left or right of the sofa, and switch whenever you like.";
            size.src = "images/measurements/cornerSofa_m.png";
            price.innerText = "480 BHD";
            color1.src = "images/Sofas/CornerSofa1beige.png";
            color2.src = "images/Sofas/CornerSofa1grey.png";
            color3.src = "images/Sofas/CornerSofa1black.png";
            break;
        case 'product4':
            img.src = "images/Sofas/WingInRoom.png"
            title.innerText = "Wing Chair";
            description.innerText = "The seat is made of supportive springs and soft foam, lumbar support, armrests and a high backrest that you can lean against. The footstool has a softly rounded design.";
            size.src = "images/measurements/wingChair_m.png";
            price.innerText = "200 BHD";
            color1.src = "images/Sofas/WingChair2red.png";
            color2.src = "images/Sofas/WingChair2grey.png";
            color3.src = "images/Sofas/WingChair2black.png";
            break;  
        case 'product5':
            img.src = "images/Sofas/ThreeInRoom1.png"
            title.innerText = "Three Seats Sofa";
            description.innerText = "The seat cushions are filled with high resilience foam that gives good support for your body and quickly regains its original shape when you \nget up.";
            size.src = "images/measurements/threeSeatsSofa2_m.png";
            price.innerText = "420 BHD";
            color1.src = "images/Sofas/ThreeSeatsSofa2blue.png";
            color2.src = "images/Sofas/ThreeSeatsSofa2beige.png";
            color3.src = "images/Sofas/ThreeSeatsSofa2grey.png";
            break;  
        case 'product6':
            img.src = "images/Sofas/ThreeInRoom2.png"
            title.innerText = "Three Seats Sofa";
            description.innerText = "The seat cushions quickly regains its original shape when you get up. The headrest extends the backrest of the sofa to provide support for your neck.";
            size.src = "images/measurements/threeSeatsSofa1_m.png";
            price.innerText = "460 BHD";
            color1.src = "images/Sofas/ThreeSeatsSofa1beige.png";
            color2.src = "images/Sofas/ThreeSeatsSofa1grey.png";
            color3.src = "images/Sofas/ThreeSeatsSofa1black.png";
            break;    
        case 'product7':
            img.src = "images/DisplayUnits/dispUnit1InRoom.png"
            title.innerText = "Display Unit";
            description.innerText = "The shelves/storage units allows you to design the TV unit and adapt your storage. \nIt is provided with an opening at the back that allows you to easily gather and organise \nall wires.";
            size.src = "images/measurements/ds1_m.png";
            price.innerText = "55 BHD";
            color1.src = "images/DisplayUnits/DisplayUnit1black.png";
            color2.src = "images/DisplayUnits/DisplayUnit1white.png";
            color3.src = "images/icons/none.png";
            break;   
        case 'product8':
            img.src = "images/DisplayUnits/dispUnit2InRoom.png"
            title.innerText = "Display Unit";
            description.innerText = "The shelves & drawers allows you to design the TV unit & store different items. \nProvided with a cable outlet \nat the back of the TV bench makes it easy to gather and organise all wires.";
            size.src = "images/measurements/ds2_m.png";
            price.innerText = "78 BHD";
            color1.src = "images/DisplayUnits/DisplayUnit2white.png";
            color2.src = "images/DisplayUnits/DisplayUnit2grey.png";
            color3.src = "images/icons/none.png";
            break;           
        case 'product9':
            img.src = "images/DisplayUnits/dispUnit3InRoom.png"
            title.innerText = "Display Unit";
            description.innerText = "The drawer has an integrated push-opener, so you can open it with just a light push. \nThere are also several cable outlets at the back of the \nTV bench.";
            size.src = "images/measurements/ds3_m.png";
            price.innerText = "105 BHD";
            color1.src = "images/DisplayUnits/DisplayUnit3greyblack.png";
            color2.src = "images/DisplayUnits/DisplayUnit3white.png";
            color3.src = "images/DisplayUnits/DisplayUnit3black.png";
            break; 
        case 'product10':
            img.src = "images/DisplayUnits/dispUnit4InRoom.png"
            title.innerText = "Display Unit";
            description.innerText = "Provides storage units that can be coordinated. And the oak expression of the top \npanel creates a warm and natural look.";
            size.src = "images/measurements/ds4_m.png";
            price.innerText = "120 BHD";
            color1.src = "images/DisplayUnits/DisplayUnit5white.png";
            color2.src = "images/DisplayUnits/DisplayUnit5black.png";
            color3.src = "images/icons/none.png";
            break;   
        case 'product11':
            img.src = "images/DisplayUnits/dispUnit5InRoom.png"
            title.innerText = "Display Unit";
            description.innerText = "This wall-mounted TV bench creates a clean and airy look, and the doors can be opened and closed with a slight push. Provided with a cable outlet \nat the top.";
            size.src = "images/measurements/ds5_m.png";
            price.innerText = "100 BHD";
            color1.src = "images/DisplayUnits/DisplayUnit4grey.png";
            color2.src = "images/DisplayUnits/DisplayUnit4white.png";
            color3.src = "images/DisplayUnits/DisplayUnit4brown.png";
            break;    
        case 'product12':
            img.src = "images/DisplayUnits/dispUnit6InRoom.png"
            title.innerText = "Display Unit";
            description.innerText = "Provided with glass doors, shelves and a soft-openeing-closing drawer that can be coordinated. Raised from the floor by legs, making it easy to clean the floor underneath.";
            size.src = "images/measurements/ds6_m.png";
            price.innerText = "160 BHD";
            color1.src = "images/DisplayUnits/DisplayUnit6blackbrown.png";
            color2.src = "images/DisplayUnits/DisplayUnit6white.png";
            color3.src = "images/DisplayUnits/DisplayUnit6black.png";
            break;  
        case 'product13':
            img.src = "images/SideTables/side1InRoom.png"
            title.innerText = "Side Table";
            description.innerText = "This side table was made of tempered glass and metal, hard-wearing materials that give an open, airy feel.\n\n Note: Max. load is 15 kg.";
            size.src = "images/measurements/side1_m.png";
            price.innerText = "20 BHD";
            color1.src = "images/SideTables/sidetable1.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;
        case 'product14':
            img.src = "images/SideTables/side2InRoom.png"
            title.innerText = "Side Table";
            description.innerText = "These nested tables are easy to place in your living room for their round, soft shapes and crafted details.";
            size.src = "images/measurements/side2_m.png";
            price.innerText = "40 BHD";
            color1.src = "images/SideTables/sidetable2white.png";
            color2.src = "images/SideTables/sidetable2black.png";
            color3.src = "images/icons/none.png";
            break; 
        case 'product15':
            img.src = "images/SideTables/side3InRoom.png"
            title.innerText = "Side Table";
            description.innerText = "This simplicity of this side table makes it easy to use for various needs and easy to match with other furnishings in different rooms.";
            size.src = "images/measurements/side3_m.png";
            price.innerText = "35 BHD";
            color1.src = "images/SideTables/sidetable3beige.png";
            color2.src = "images/SideTables/sidetable3white.png";
            color3.src = "images/SideTables/sidetable3darkbrown.png";
            break; 
        case 'product16':
            img.src = "images/SideTables/side4InRoom.png"
            title.innerText = "Side Table";
            description.innerText = "This side table is easy to place in small spaces. And shelves are useful for storing and display.";
            size.src = "images/measurements/side4_m.png";
            price.innerText = "42 BHD";
            color1.src = "images/SideTables/sidetable5brown.png";
            color2.src = "images/SideTables/sidetable5white.png";
            color3.src = "images/icons/none.png";
            break;
        case 'product17':
            img.src = "images/SideTables/side5InRoom.png"
            title.innerText = "Side Table";
            description.innerText = "Provided with shelves that allow you to adapt your storage. Also, the table top's oak expression creates a warm and natural feel.";
            size.src = "images/measurements/side5_m.png";
            price.innerText = "25 BHD";
            color1.src = "images/SideTables/sidetable4whitebeige.png";
            color2.src = "images/SideTables/sidetable4darkbluebeige.png";
            color3.src = "images/icons/none.png";
            break;
        case 'product18':
            img.src = "images/SideTables/side6InRoom.png"
            title.innerText = "Side Table";
            description.innerText = "Provided with castors to make it easy to move the table if needed. Plus, a separate shelf that helps you keep your things organised and the \ntable top clear.";
            size.src = "images/measurements/side6_m.png";
            price.innerText = "52 BHD";
            color1.src = "images/SideTables/sidetable6grey.png";
            color2.src = "images/SideTables/sidetable6white.png";
            color3.src = "images/SideTables/sidetable6red.png";
            break;    
            
        case 'product19':
            img.src = "images/ShelvingUnits/sUnit1InRoom.png"
            title.innerText = "Shelving Unit";
            description.innerText = "With smooth surfaces and the rounded edges. You can choose whether to place it standing (vertically) or lying (horizontally).";
            size.src = "images/measurements/su1_m.png";
            price.innerText = "38 BHD";
            color1.src = "images/ShelvingUnits/SelvingUnit1lightbrown.png";
            color2.src = "images/ShelvingUnits/SelvingUnit1black.png";
            color3.src = "images/icons/none.png";
            break;  
        case 'product20':
            img.src = "images/ShelvingUnits/sUnit2InRoom.png"
            title.innerText = "Shelving Unit";
            description.innerText = "Tempered glass and metal are durable materials that provide an open, airy feel for this shelving unit. Has adjustable feet that allows it to stand steady.";
            size.src = "images/measurements/su2_m.png";
            price.innerText = "35 BHD";
            color1.src = "images/ShelvingUnits/SelvingUnit3.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;   
        case 'product21':
            img.src = "images/ShelvingUnits/sUnit3InRoom.png"
            title.innerText = "Shelving Unit";
            description.innerText = "The perfect shelving unit for tight or unused wall, that can hold many things. Can be hanged vertically or horizontally depending on space and storage needs.";
            size.src = "images/measurements/su3_m.png";
            price.innerText = "23 BHD";
            color1.src = "images/ShelvingUnits/SelvingUnit4white.png";
            color2.src = "images/ShelvingUnits/SelvingUnit4black.png";
            color3.src = "images/icons/none.png";
            break;  
        case 'product22':
            img.src = "images/ShelvingUnits/sUnit4InRoom.png"
            title.innerText = "Shelving Unit";
            description.innerText = "Provided with 3 movable shelves that makes it easy to adapt the space to your storage needs. The height of the furniture allows the top to be used as a display surface.";
            size.src = "images/measurements/su4_m.png";
            price.innerText = "40 BHD";
            color1.src = "images/ShelvingUnits/SelvingUnit6darkbrown.png";
            color2.src = "images/ShelvingUnits/SelvingUnit6white.png";
            color3.src = "images/icons/none.png";
            break; 
        case 'product23':
            img.src = "images/ShelvingUnits/sUnit5InRoom.png"
            title.innerText = "Shelving Unit";
            description.innerText = "This  open shelving unit allows you to store lots of things and easily access them when needed. And The shelving section is made of untreated wood so you can sand or paint it to freshen up.";
            size.src = "images/measurements/su5_m.png";
            price.innerText = "27 BHD";
            color1.src = "images/ShelvingUnits/SelvingUnit2.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;
        case 'product24':
            img.src = "images/ShelvingUnits/sUnit6InRoom.png"
            title.innerText = "Shelving Unit";
            description.innerText = "The perfect shelves and frames alignment creates a strong and uniform expression. You can choose whether to place it standing (vertically) or lying (horizontally).";
            size.src = "images/measurements/su6_m.png";
            price.innerText = "48 BHD";
            color1.src = "images/ShelvingUnits/SelvingUnit5black.png";
            color2.src = "images/ShelvingUnits/SelvingUnit5white.png";
            color3.src = "images/icons/none.png";
            break; 
        case 'product25':
            img.src = "images/Curtains/curtain1InRoom.png"
            title.innerText = "Block-Out Curtains";
            description.innerText = "Block-out curtains blocks light from shining through and completely darkens your room. The curtains can be used on a curtain rod or a curtain track.";
            size.src = "images/measurements/curtain1_m.png";
            price.innerText = "22 BHD";
            color1.src = "images/Curtains/curtain1grey.png";
            color2.src = "images/Curtains/curtain1beige.png";
            color3.src = "images/Curtains/curtain1darkgreen.png";
            break; 
        case 'product26':
            img.src = "images/Curtains/curtain2InRoom.png"
            title.innerText = "Light Filtering Curtains";
            description.innerText = "The curtains lower the general light level coming form outside. You can hang the curtain directly on a curtain rod as the heading tape has hidden tabs.";
            size.src = "images/measurements/curtain2_m.png";
            price.innerText = "16 BHD";
            color1.src = "images/Curtains/curtain2brownn.png";
            color2.src = "images/Curtains/curtain2beige.png";
            color3.src = "images/Curtains/curtain2grey.png";
            break; 
        case 'product27':
            img.src = "images/Curtains/curtain3InRoom.png"
            title.innerText = "Block-Out Curtains";
            description.innerText = "Block-out curtains blocks light from shining through and completely darkens your room. You can directly hang the curtains o the curtain rod as it is provided with an eyelet heading.";
            size.src = "images/measurements/curtain3_m.png";
            price.innerText = "24 BHD";
            color1.src = "images/Curtains/curtain3turquoise.png";
            color2.src = "images/Curtains/curtain3grey.png";
            color3.src = "images/Curtains/curtain3beige.png";
            break; 
        case 'product28':
            img.src = "images/Curtains/curtain4InRoom.png"
            title.innerText = "Sheer Curtains";
            description.innerText = "These sheer curtains let the daylight through and are perfect to use in a layered window solution. Can be used on either a curtain rod or a curtain track.";
            size.src = "images/measurements/curtain4_m.png";
            price.innerText = "18 BHD";
            color1.src = "images/Curtains/curtain4white.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break; 
        case 'product29':
            img.src = "images/Curtains/curtain5InRoom.png"
            title.innerText = "Block-Out Curtains";
            description.innerText = "Block-out curtains blocks light from shining through and completely darkens your room. The lining enhances the block-out effect and makes the back as beautiful as the front.";
            size.src = "images/measurements/curtain5_m.png";
            price.innerText = "20 BHD";
            color1.src = "images/Curtains/curtain5yellow.png";
            color2.src = "images/Curtains/curtain5beige.png";
            color3.src = "images/Curtains/curtain5blue.png";
            break; 
        case 'product30':
            img.src = "images/Curtains/curtain6InRoom.png"
            title.innerText = "Sheer Curtains";
            description.innerText = "These sheer curtains let the daylight through and are perfect to use in a layered window solution. Can be used on either a curtain rod or a curtain track.";
            size.src = "images/measurements/curtain6_m.png";
            price.innerText = "18 BHD";
            color1.src = "images/Curtains/curtain6offwhite.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;   
        case 'product31':
            img.src = "images/Beds/single1InRoom.png"
            title.innerText = "Single Bed";
            description.innerText = "Provided with adjustable bed sides that allow you to use mattresses of different thicknesses. Designed with a high headboard so you can sit up comfortably  in bed.";
            size.src = "images/measurements/singlebed1_m.png";
            price.innerText = "110 BHD";
            color1.src = "images/Beds/single1black.png";
            color2.src = "images/Beds/single1white.png";
            color3.src = "images/icons/none.png";
            break; 
        case 'product32':
            img.src = "images/Beds/double1InRoom.png"
            title.innerText = "Double Bed";
            description.innerText = "Designed with adjustable bed sides, a padded headboard, and legs that are placed on \nthe outer side of the bed \nframe, adding a cool and modern look.";
            size.src = "images/measurements/doublebed1_m.png";
            price.innerText = "220 BHD";
            color1.src = "images/Beds/double1.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break; 
        case 'product33':
            img.src = "images/Beds/king1InRoom.png"
            title.innerText = "King Bed";
            description.innerText = "Designed with adjustable bed sides, a padded headboard, and legs that are placed on \nthe outer side of the bed \nframe, adding a cool and modern look.";
            size.src = "images/measurements/king1_m.png";
            price.innerText = "420 BHD";
            color1.src = "images/Beds/king1.png";
            color2.src = "images/Beds/king1pink.png";
            color3.src = "images/icons/none.png";
            break;  
        case 'product34':
            img.src = "images/Beds/single2InRoom.png"
            title.innerText = "Single Bed";
            description.innerText = "Provided with adjustable bed sides so you can use mattresses of different thicknesses. \nAnd 2 large storage boxes under the bed that gives a lot of extra storage space.";
            size.src = "images/measurements/singlebed2_m.png";
            price.innerText = "180 BHD";
            color1.src = "images/Beds/single2white.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break; 
        case 'product35':
            img.src = "images/Beds/double2InRoom.png"
            title.innerText = "Double Bed";
            description.innerText = "Provided with adjustable bed sides that allow you to use mattresses of different thicknesses. Designed with a high headboard so you can sit up comfortably  in bed.";
            size.src = "images/measurements/doublebed2_m.png";
            price.innerText = "300 BHD";
            color1.src = "images/Beds/double2black.png";
            color2.src = "images/Beds/double2white.png";
            color3.src = "images/icons/none.png";
            break; 
        case 'product36':
            img.src = "images/Beds/king2InRoom.png"
            title.innerText = "King Bed";
            description.innerText = "Provided with adjustable bed sides, high headboard and 2 storage boxes with castors on the base that make them easy to roll out.";
            size.src = "images/measurements/king2_m.png";
            price.innerText = "440 BHD";
            color1.src = "images/Beds/king2.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break; 
        case 'product37':
            img.src = "images/Wardrobes/wardrobe1InRoom.png"
            title.innerText = "Open Wardrobe";
            description.innerText = "Provided with shelves and 3 drawers that allows you to separate everything down to the tiniest sock and save some time looking for stuff.";
            size.src = "images/measurements/wardrobe1_m.png";
            price.innerText = "200 BHD";
            color1.src = "images/Wardrobes/wardrobe1.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;
        case 'product38':
            img.src = "images/Wardrobes/wardrobe2InRoom.png"
            title.innerText = "Wardrobe";
            description.innerText = "Provided with integrated dampers that catch the door and the running drawer and closes both slowly, silently and softly. Plus, adjustable feet that make it possible to compensate.";
            size.src = "images/measurements/wardrobe2_m.png";
            price.innerText = "118 BHD";
            color1.src = "images/Wardrobes/wardrobe2.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break; 
        case 'product39':
            img.src = "images/Wardrobes/wardrobe3InRoom.png"
            title.innerText = "Wardrobe Combination";
            description.innerText = "Designed with a narrow frame. Provided with shelves, mesh baskets and sliding doors that do not require knobs or handles and allow more room for furniture.";
            size.src = "images/measurements/wardrobe3_m.png";
            price.innerText = "240 BHD";
            color1.src = "images/Wardrobes/wardrobe3.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break; 
        case 'product40':
            img.src = "images/Wardrobes/wardrobe4InRoom.png"
            title.innerText = "Wardrobe";
            description.innerText = "Provided with shelves, mirror door that makes the room feel lighter and more spacious, and integrated dampers that catch the doors and close it slowly, silently and softly.";
            size.src = "images/measurements/wardrobe4_m.png";
            price.innerText = "280 BHD";
            color1.src = "images/Wardrobes/wardrobe4.png";
            color2.src = "images/Wardrobes/wardrobe4darkbrown.png";
            color3.src = "images/icons/none.png";
            break; 
        case 'product41':
            img.src = "images/Wardrobes/wardrobe5InRoom.png"
            title.innerText = "Wardrobe Combination";
            description.innerText = "Simple wardrobe with sliding doors that allow more room for furniture because they don’t take any space when open.";
            size.src = "images/measurements/wardrobe5_m.png";
            price.innerText = "170 BHD";
            color1.src = "images/Wardrobes/wardrobe5.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break; 
        case 'product42':
            img.src = "images/Wardrobes/wardrobe6InRoom.png"
            title.innerText = "Wardrobe Combination";
            description.innerText = "Provided with shelves, frosted doors, and integrated dampers that catch the door and make it close it slowly, silently \nand softly.";
            size.src = "images/measurements/wardrobe6_m.png";
            price.innerText = "215 BHD";
            color1.src = "images/Wardrobes/wardrobe6.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break; 
        case 'product43':
            img.src = "images/Desks/desk1InRoom.png"
            title.innerText = "Desk";
            description.innerText = "The storage unit can be mounted to the right or left. \nIt has extra room above the top shelf, and provided with drawer stops that prevent the drawers from being pulled out too far.";
            size.src = "images/measurements/desk1_m.png";
            price.innerText = "111 BHD";
            color1.src = "images/Desks/desk1.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;     
        case 'product44':
            img.src = "images/Desks/desk2blackInRoom.png"
            title.innerText = "Desk";
            description.innerText = "Can be placed in the middle of a room because the back is finished. Provided with drawer stops, adjustable shelves to fit different things, and a cable outlet at the back.";
            size.src = "images/measurements/desk2_m.png";
            price.innerText = "85 BHD";
            color1.src = "images/Desks/desk2black.png";
            color2.src = "images/Desks/desk2white.png";
            color3.src = "images/Desks/desk2black&red.png";
            break;
        case 'product45':
            img.src = "images/Desks/desk3whiteInRoom.png"
            title.innerText = "Simple Desk";
            description.innerText = "Has a durable desk surface, cable trunking under the table top to keep the desk neat and tidy, and an included hook to let your headphones close \nat hand.";
            size.src = "images/measurements/desk3_m.png";
            price.innerText = "71 BHD";
            color1.src = "images/Desks/desk3white.png";
            color2.src = "images/Desks/desk3black.png";
            color3.src = "images/icons/none.png";
            break;
        case 'product46':
            img.src = "images/Desks/desk4InRoom.png"
            title.innerText = "Corner Desk";
            description.innerText = "It is provided with adjustable shelves that help you use your space more efficiently and a cable outlet at the back to keep sockets and cables out of sight but close at hand.";
            size.src = "images/measurements/desk4_m.png";
            price.innerText = "148 BHD";
            color1.src = "images/Desks/desk4.png";
            color2.src = "images/Desks/desk4darkbrown.png";
            color3.src = "images/icons/none.png";
            break;
        case 'product47':
            img.src = "images/Desks/desk5InRoom.png"
            title.innerText = "Gaming Desk";
            description.innerText = "The contoured table top allows you to sit close and supports your wrists and forearms. You can Hang the small shelves inside or outside the side panels, The high side panels help block sunlight.";
            size.src = "images/measurements/desk5_m.png";
            price.innerText = "160 BHD";
            color1.src = "images/Desks/desk5.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;
        case 'product48':
            img.src = "images/Desks/desk6whiteInRoom.png"
            title.innerText = "Desk Combination";
            description.innerText = "You can place it vertically or horizontally, and you can mount the table top at a height that suits you. Also, it is provided with plastic feet to protect the floor against scratching when it is moved.";
            size.src = "images/measurements/desk6_m.png";
            price.innerText = "127 BHD";
            color1.src = "images/Desks/desk6white.png";
            color2.src = "images/Desks/desk6black.png";
            color3.src = "images/icons/none.png";
            break; 
        case 'product49':
            img.src = "images/Drawers/drawer1InRoom.png"
            title.innerText = "Drawer Unit";
            description.innerText = "Provided with smooth running drawers with pull-out stop, and a safety fitting is included so that you can attach the chest of drawers to the wall.";
            size.src = "images/measurements/drawer1_m.png";
            price.innerText = "96 BHD";
            color1.src = "images/Drawers/drawer1green.png";
            color2.src = "images/Drawers/drawer1white.png";
            color3.src = "images/Drawers/drawer1black.png";
            break; 
        case 'product50':
            img.src = "images/Drawers/drawer2InRoom.png"
            title.innerText = "Drawer Unit";
            description.innerText = "The first drawer is frosted. This drawer unit Provided with smooth running drawers with pull-out stops, and a safety fitting is included so that you can attach the chest of drawers to the wall.";
            size.src = "images/measurements/drawer2_m.png";
            price.innerText = "117 BHD";
            color1.src = "images/Drawers/drawer2.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;
        case 'product51':
            img.src = "images/Drawers/drawer3InRoom.png"
            title.innerText = "Drawer Unit";
            description.innerText = "This drawer unit is provided with wide chest of drawers that gives you plenty of storage space as well as room for items you want to display on top. And drawers are smooth running.";
            size.src = "images/measurements/drawer3_m.png";
            price.innerText = "170 BHD";
            color1.src = "images/Drawers/drawer3grey.png";
            color2.src = "images/Drawers/drawer3white.png";
            color3.src = "images/icons/none.png";
            break; 
        case 'product52':
            img.src = "images/Drawers/drawer4whiteInRoom.png"
            title.innerText = "Drawer Unit";
            description.innerText = "The drawers in this drawer unit are smooth running drawers provided with pull-out stops. Plus, it has a room for items you want to display on top.";
            size.src = "images/measurements/drawer4_m.png";
            price.innerText = "191 BHD";
            color1.src = "images/Drawers/drawer4white.png";
            color2.src = "images/Drawers/drawer4grey.png";
            color3.src = "images/icons/none.png";
            break;
        case 'product53':
            img.src = "images/Drawers/drawer5InRoom.png"
            title.innerText = "Drawer Unit";
            description.innerText = "It is designed to be on castors so you can move it where you need it. And the cut-out handles make it easy for you to grip and open the drawers.";
            size.src = "images/measurements/drawer5_m.png";
            price.innerText = "68 BHD";
            color1.src = "images/Drawers/drawer5black.png";
            color2.src = "images/Drawers/drawer5green.png";
            color3.src = "images/Drawers/drawer5white.png";
            break;
        case 'product54':
            img.src = "images/Drawers/drawer6InRoom.png"
            title.innerText = "Drawer Unit";
            description.innerText = "Provided with integrated dampers that catch the running drawers and closes them slowly, silently and softly. And the cut-out handles make it easy for you to grip and open the drawers.";
            size.src = "images/measurements/drawer6_m.png";
            price.innerText = "184 BHD";
            color1.src = "images/Drawers/drawer6.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;   
        case 'product55':
            img.src = "images/Chairs/chair1greenInRoom.png";
            title.innerText = "Desk Chair";
            description.innerText = "This desk chair is provided with synchronised tilt mechanism allows the chair to move with you, and height and width adjustable armrests enable a relaxed position for your arms and shoulders.";
            size.src = "images/measurements/chair1_m.png";
            price.innerText = "50 BHD";
            color1.src = "images/Chairs/chair1green.png";
            color2.src = "images/Chairs/chair1beige.png";
            color3.src = "images/Chairs/chair1grey.png";
            break;   
        case 'product56':
            img.src = "images/Chairs/chair2InRoom.png";
            title.innerText = "Desk/Gaming Chair";
            description.innerText = "The high backrest design gives support to your body, neck \nand head. Provided with a synchronised seat and armrests that can be adjusted in height, to follow your body movements.";
            size.src = "images/measurements/chair2_m.png";
            price.innerText = "38 BHD";
            color1.src = "images/Chairs/chair2white.png";
            color2.src = "images/Chairs/chair2black.png";
            color3.src = "images/icons/none.png";
            break;
        case 'product57':
            img.src = "images/Chairs/chair3InRoom.png";
            title.innerText = "Desk Chair";
            description.innerText = "Provides lumbar support , tilt function that is lockable which increases stability, and armrests provide support for the upper part of your forearms.";
            size.src = "images/measurements/chair3_m.png";
            price.innerText = "35 BHD";
            color1.src = "images/Chairs/chair3.png";
            color2.src = "images/Chairs/chair3green.png";
            color3.src = "images/Chairs/chair3red.png";
            break; 
        case 'product58':
            img.src = "images/Chairs/chair4InRoom.png";
            title.innerText = "Desk/Gaming Chair";
            description.innerText = "Designed with automatic tilt tension, height-adjustable seat, synchronised tilt mechanism, and a well-shaped backrest with adjustable lumbar support and airy mesh that keeps your body cool.";
            size.src = "images/measurements/chair4_m.png";
            price.innerText = "45 BHD";
            color1.src = "images/Chairs/chair4.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;   
        case 'product59':
            img.src = "images/Chairs/chair5InRoom.png";
            title.innerText = "Desk Chair";
            description.innerText = "You sit comfortably since the chair is adjustable in height. The mesh material of the backrest lets air through, and the armrests follow your movements and can be adjusted in height.";
            size.src = "images/measurements/chair5_m.png";
            price.innerText = "31 BHD";
            color1.src = "images/Chairs/chair5.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;
        case 'product60':
            img.src = "images/Chairs/chair6InRoom.png";
            title.innerText = "Desk/Gaming Chair";
            description.innerText = "The design of the high backrest gives support to your body, and you can easily adjust the height of the chair & back with one hand. On the back of the backrest there is a pocket.";
            size.src = "images/measurements/chair6_m.png";
            price.innerText = "40 BHD";
            color1.src = "images/Chairs/chair6black.png";
            color2.src = "images/Chairs/chair6grey.png";
            color3.src = "images/icons/none.png";
            break; 
        case 'product61':
            img.src = "images/Cabinets/Cabinet1inRoom.png";
            title.innerText = "Wall Cabinet";
            description.innerText = "You can customise spacing as you need, because the shelves inside are adjustable, and you can choose to mount the door on the right or left side.";
            size.src = "images/measurements/cabinet1&3_m.png";
            price.innerText = "";
            color1.src = "images/Cabinets/cabinet1brownB.png";
            color2.src = "images/Cabinets/cabinet1beige.png";
            color3.src = "images/icons/none.png";
            break; 
        case 'product62':
            img.src = "images/Cabinets/cabinet2InRoom.png";
            title.innerText = "High Cabinet";
            description.innerText = "You can customise spacing as you need, because the shelves inside are adjustable. Doors can be mounted on the right or left, and snap-on hinges can be mounted on the door without screws.";
            size.src = "images/measurements/cabinet2&5_m.png";
            price.innerText = "";
            color1.src = "images/Cabinets/cabinet2white.png";
            color2.src = "images/Cabinets/cabinet2black&white.png";
            color3.src = "images/Cabinets/cabinet2black.png";
            break;  
        case 'product63':
            img.src = "images/Cabinets/cabinet3InRoom.png";
            title.innerText = "Wall Cabinet";
            description.innerText = "You can customise spacing as you need, because the shelves inside are adjustable, and you can choose to mount the door on the right or left side.";
            size.src = "images/measurements/cabinet1&3_m.png";
            price.innerText = "";
            color1.src = "images/Cabinets/cabinet3grey.png";
            color2.src = "images/Cabinets/cabinet3beige.png";
            color3.src = "images/icons/none.png";
            break;    
        case 'product64':
            img.src = "images/Cabinets/cabinet4InRoom.png";
            title.innerText = "Base Cabinet";
            description.innerText = "The drawers are smooth-running with stop, have built-in dampers so they close slowly and softly, and are self-closing the last few centimetres.";
            size.src = "images/measurements/cabinet4&6_m.png";
            price.innerText = "";
            color1.src = "images/Cabinets/cabinet4brownW.png";
            color2.src = "images/Cabinets/cabinet4brownblack.png";
            color3.src = "images/icons/none.png";
            break;   
        case 'product65':
            img.src = "images/Cabinets/cabinet5InRoom.png";
            title.innerText = "High Cabinet";
            description.innerText = "You can customise spacing as you need, because the shelves inside are adjustable. Doors can be mounted on the right or left, and snap-on hinges can be mounted on the door without screws.";
            size.src = "images/measurements/cabinet2&5_m.png";
            price.innerText = "";
            color1.src = "images/Cabinets/cabinet5beige.png";
            color2.src = "images/Cabinets/cabinet5brown.png";
            color3.src = "images/Cabinets/cabinet5lightblue.png";
            break;  
        case 'product66':
            img.src = "images/Cabinets/cabinet6InRoom.png";
            title.innerText = "Base Cabinet";
            description.innerText = "The drawers are smooth-running with stop, have built-in dampers so they close slowly and softly, and are self-closing the last few centimetres.";
            size.src = "images/measurements/cabinet4&6_m.png";
            price.innerText = "";
            color1.src = "images/Cabinets/cabinet6redbrown.png";
            color2.src = "images/Cabinets/cabinet6redwhite.png";
            color3.src = "images/Cabinets/cabinet6redblack.png";
            break; 
        case 'product67':
            img.src = "images/DiningTables/dining1InRoom.png";
            title.innerText = "Expendable Table";
            description.innerText = "Dining Table with 6 chairs designed with varying grain pattern and natural colour shifts. It’s quick and easy to change the size of the table to suit your different needs.";
            size.src = "images/measurements/dining1_m.png";
            price.innerText = "350 BHD";
            color1.src = "images/DiningTables/dining1.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;
        case 'product68':
            img.src = "images/DiningTables/dining2InRoom.png";
            title.innerText = "Expendable Table";
            description.innerText = "Dining Table with 6 chairs. This dining table is designed with a top layer of solid wood, a hard-wearing natural material that can be sanded and surface treated when required.";
            size.src = "images/measurements/dining2_m.png";
            price.innerText = "377 BHD";
            color1.src = "images/DiningTables/dining2.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;  
        case 'product69':
            img.src = "images/DiningTables/dining3InRoom.png";
            title.innerText = "Simple Expendable Table";
            description.innerText = "Dining Table with 4 chairs. 1 person can quickly and smoothly extend the table, and when done, you can hide the extension leaf under the table, giving the top a smooth, seamless surface.";
            size.src = "images/measurements/dining3_m.png";
            price.innerText = "200 BHD";
            color1.src = "images/DiningTables/dining3.png";
            color2.src = "images/DiningTables/dining3brown.png";
            color3.src = "images/icons/none.png";
            break;  
        case 'product70':
            img.src = "images/DiningTables/dining4InRoom.png";
            title.innerText = "Dark Oak Table";
            description.innerText = "Dining Table with 6 chairs. Designed with included self-storing leaves. The chair seat is slightly bowl-shaped and the backrest both curved and angled.";
            size.src = "images/measurements/dining4_m.png";
            price.innerText = "326 BHD";
            color1.src = "images/DiningTables/dining4.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;  
        case 'product71':
            img.src = "images/DiningTables/dining5InRoom.png";
            title.innerText = "Spruce Table";
            description.innerText = "Dining Table with 6 chairs, designed with included self-storing leaves. \nThe table top has a hardwood veneer top layer and the upholstered chairs give optimal seating comfort";
            size.src = "images/measurements/dining5_m.png";
            price.innerText = "339 BHD";
            color1.src = "images/DiningTables/dining5.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;   
        case 'product72':
            img.src = "images/DiningTables/dining6InRoom.png";
            title.innerText = "Expendable Table";
            description.innerText = "Dining Table with 6 chairs, it is quick and easy to change the size of the table to suit your different needs. \nThe chairs have a high back which allows you to sit comfortably.";
            size.src = "images/measurements/dining6_m.png";
            price.innerText = "360 BHD";
            color1.src = "images/DiningTables/dining6.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;    
        case 'product73':
            img.src = "images/Islands/Island1inRoom.png";
            title.innerText = "Kitchen Island";
            description.innerText = "Kitchen Island with 1 drawer that has a soft–closing function which makes it close softly and quietly. And 2 shelves that has room for a microwave.";
            size.src = "images/measurements/island1_m.png";
            price.innerText = "100 BHD";
            color1.src = "images/Islands/Island1.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;
        case 'product74':
            img.src = "images/Islands/Island2inRoom.png";
            title.innerText = "Kitchen Trolley";
            description.innerText = "Kitchen Island that is expandable and has two sturdy oak shelves that are movable and have groves to hold bottles in place.";
            size.src = "images/measurements/island2_m.png";
            price.innerText = "90 BHD";
            color1.src = "images/Islands/Island2.png";
            color2.src = "images/Islands/island2white.png";
            color3.src = "images/icons/none.png";
            break; 
        case 'product75':
            img.src = "images/Islands/Island3GreyinRoom.png";
            title.innerText = "Kitchen Island";
            description.innerText = "Kitchen Island with 2 shelves and space on the other side to store chairs. A layer construction is added, to have extra stability and makes it less sensitive to humidity to avoid cracks.";
            size.src = "images/measurements/island3_m.png";
            price.innerText = "145 BHD";
            color1.src = "images/Islands/Island3Grey.png";
            color2.src = "images/Islands/island3white.png";
            color3.src = "images/icons/none.png";
            break;    
        case 'product76':
            img.src = "images/Islands/Island4inRoom.png";
            title.innerText = "Kitchen Island";
            description.innerText = "Kitchen Island with 2 racks, 10 hooks and space on the other side to store chairs. It has an end-grain appearance which gives a rustic charm that goes well with traditional kitchen designs.";
            size.src = "images/measurements/Island4_m.png";
            price.innerText = "315 BHD";
            color1.src = "images/Islands/Island4.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;   
        case 'product77': 
            img.src = "images/Islands/Island5inRoom.png";
            title.innerText = "Kitchen Island";
            description.innerText = "Kitchen Island with 2 racks, 3 hooks on the side for hanging, and 2 drawers. It has adjustable feet to compensate any abnormalities in the floor.";
            size.src = "images/measurements/Island5_m.png";
            price.innerText = "225 BHD";
            color1.src = "images/Islands/Island5.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;    
        case 'product78':
            img.src = "images/Islands/Island6inRoom.png";
            title.innerText = "Kitchen Island";
            description.innerText = "Kitchen Island with 2 shelves and a panel that has 2 movable hooks, 2 movable containers, and a small movable  shelf. The 2 shelves are movable and made out of steel which has powder-coated surface";
            size.src = "images/measurements/Island6_m.png";
            price.innerText = "100 BHD";
            color1.src = "images/Islands/Island6.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;       
        case 'product79':
            img.src = "images/Shelves/Shelve1inRoom.png";
            title.innerText = "Suspention Rail";
            description.innerText = "Suspension rail that has a shelf, a rail, a dish drainer, and a detachable tray underneath to collect water from the drainer.";
            size.src = "images/measurements/Shelf1_m.png";
            price.innerText = "40 BHD";
            color1.src = "images/Shelves/Shelve1.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;  
        case 'product80':
            img.src = "images/Shelves/Shelve2inRoom.png";
            title.innerText = "Swivel Shelf";
            description.innerText = "2 swivel shelf that has a clever construction. You can quickly attach the shelf to any open wall or edge of the shelves. It has raised edges that keep things in place.";
            size.src = "images/measurements/Shelf2_m.png";
            price.innerText = "4 BHD";
            color1.src = "images/Shelves/Shelve2.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;  
        case 'product81':
            img.src = "images/Shelves/Shelve3GreyinRoom.png";
            title.innerText = "Wall Shelf";
            description.innerText = "Shelf with 3 hooks to hang things. The design of the shelf is made for you to see and grab things easily.";
            size.src = "images/measurements/Shelf3_m.png";
            price.innerText = "20 BHD";
            color1.src = "images/Shelves/Shelve3Grey.png";
            color2.src = "images/Shelves/Shelve3.png";
            color3.src = "images/icons/none.png";
            break;  
        case 'product82':
            img.src = "images/Shelves/Shelve4inRoom.png";
            title.innerText = "Wall Shelf";
            description.innerText = "This kind of wall shelf is best for displaying spices, books, or mugs. For hanging utensils or small towels, the 4 knobs are perfect for that.";
            size.src = "images/measurements/Shelf4_m.png";
            price.innerText = "30 BHD";
            color1.src = "images/Shelves/Shelve4.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;  
        case 'product83':
            img.src = "images/Shelves/Shelve5inRoom.png";
            title.innerText = "Glasses Shelf";
            description.innerText = "This shelf has 2 space of storage that are separated diagonally , which makes it suitable for storing bottles.";
            size.src = "images/measurements/Shelf5_m.png";
            price.innerText = "30 BHD";
            color1.src = "images/Shelves/Shelve5.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;  
        case 'product84':
            img.src = "images/Shelves/Shelve6inRoom.png";
            title.innerText = "Suspention Rail";
            description.innerText = "Wall shelf, with 3 shelves for storing, and a magnet rack to store knives, making it easy to grab when cooking.";
            size.src = "images/measurements/Shelf6_m.png";
            price.innerText = "50 BHD";
            color1.src = "images/Shelves/Shelve6.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;  
        case 'product85':
            img.src = "images/Blinds/Blind1inRoom.png";
            title.innerText = "Light Filtering Blind";
            description.innerText = "Elegant and poised, these luxurious oriental magnolias patterned roller blinds will bring a sophisticated natural look to any space.";
            size.src = "images/measurements/Blind_m.png";
            price.innerText = "15 BHD";
            color1.src = "images/Blinds/Blind1.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;
            case 'product86':
            img.src = "images/Blinds/Blind2inRoom.png";
            title.innerText = "Light Filtering Blind";
            description.innerText = "Chic, stylish and ultra-modern, these high-quality matte black Venetian blinds are a striking yet tasteful way to dress your windows. ​They’re strong, lightweight, water-resistant and easy to wipe clean";
            size.src = "images/measurements/Blind_m.png";
            price.innerText = "16 BHD";
            color1.src = "images/Blinds/Blind2.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;  
            case 'product87':
            img.src = "images/Blinds/Blind3inRoom.png";
            title.innerText = "Block-Out Blinds";
            description.innerText = "Perfect for kitchens, or any room where you want a burst of color and flowery loveliness.​ Featuring hand painted watercolor flowers in rust red, lemon, yellow and grey-beige set.";
            size.src = "images/measurements/Blind_m.png";
            price.innerText = "25 BHD";
            color1.src = "images/Blinds/Blind3.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;  
            case 'product88':
            img.src = "images/Blinds/Blind4inRoom.png";
            title.innerText = "Light Filtering Blind";
            description.innerText = "Tough and hard-wearing PVC fabric is 100% waterproof, easy wipe clean, fire resistant and blackout too, giving you all the privacy you need.";
            size.src = "images/measurements/Blind_m.png";
            price.innerText = "13 BHD";
            color1.src = "images/Blinds/Blind4.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;  
            case 'product89':
            img.src = "images/Blinds/Blind5inRoom.png";
            title.innerText = "Light Filtering Blind";
            description.innerText = "Bring unique natural elegance to your home’s décor with these luxurious flowers, plants, leaves and vases patterned roller blinds";
            size.src = "images/measurements/Blind_m.png";
            price.innerText = "16 BHD";
            color1.src = "images/Blinds/Blind5.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;  
            case 'product90':
            img.src = "images/Blinds/Blind6inRoom.png";
            title.innerText = "Light Filtering Blind";
            description.innerText = "​The exquisite neutral tones of these high-quality made-to-measure pale grey roller blinds are the perfect way to create a chic contemporary look at your windows.";
            size.src = "images/measurements/Blind_m.png";
            price.innerText = "15 BHD";
            color1.src = "images/Blinds/Blind6.png";
            color2.src = "images/icons/none.png";
            color3.src = "images/icons/none.png";
            break;    
        default:
            break;
    }
    modal.style.display = "block";
}

//Function for closing the pop-up (modal)
function closeModal(modalName) {
    document.getElementById(modalName).style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("p-modal")) {
        document.getElementById("p-modal").style.display = "none";
    }
}