const email2=document.getElementById("email2");
let emailId=localStorage.getItem("emailid");
email2.value=emailId;
const SpanText=document.querySelector("#profileemail");
SpanText.innerText=emailId;
const changeColor=document.querySelectorAll(".foundbutton");
const profilePage=document.querySelector(".profile-page")
const Subscription=document.querySelector(".manage-subscription");
const redeemCoupons=document.querySelector(".redeem-coupons")
const paymentHistory=document.querySelector(".payment-history");
const selectTopicBar=document.querySelector(".select-topic-bar");
changeColor.forEach((element) => {
    // console.log(element);

    element.addEventListener("click",(e)=>{

    changeColor.forEach((element)=>{
        // element.classList.add("newclass");
        element.classList.remove("newclass");
        
    })
    element.classList.add("newclass");
    profilePage.style.display="none";
    Subscription.style.display="none";
    redeemCoupons.style.display="none";
    paymentHistory.style.display="none";
    selectTopicBar.style.display="none";
    
    if(element.classList.contains("my-profile")){

        profilePage.style.display="inline-block";
    }
    if(element.classList.contains("subcription")){

        Subscription.style.display="inline-block";
    }
    if(element.classList.contains("coupons")){

        redeemCoupons.style.display="inline-block";
    }
    if(element.classList.contains("history")){

        paymentHistory.style.display="inline-block";
    }
    if(element.classList.contains("support")){

        selectTopicBar.style.display="inline-block";
    }
    // console.log(element);   
    })
    // console.log(element);
});
// for(let i=0;i<changeColor.length;i++){
//     changeColor.addEventListener("click",()=>{
//         let el=changeColor[0];
//         while(el){
//             if(el.classList.contains("newclass")){
//                 el.classList.remove("newclass");
//             }
//             el=el.nextSibling;
//         }
//         element.classList.add("newclass");
//     })
// }