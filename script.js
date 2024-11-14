const dropdownbtnFeature=document.getElementById("feature-dropdown-btn");
const dropdownMenuFeature=document.getElementById("feature-dropdown");
const toggleArrowFeature=document.getElementById("feature-arrow");

const dropdownbtnCompany=document.getElementById("company-dropdown-btn");
const dropdownMenuCompany=document.getElementById("company-dropdown");
const toggleArrowCompany=document.getElementById("company-arrow");

const toggleDropdownFeature = function () {
    dropdownMenuFeature.classList.toggle("show-feature");
    toggleArrowFeature.classList.toggle("feature-arrow");
 
};
const toggleDropdownCompany = function () {
    dropdownMenuCompany.classList.toggle("show-company");
    toggleArrowCompany.classList.toggle("company-arrow");
 
};

dropdownbtnFeature.addEventListener("click",function (e){
    e.stopPropagation();
    toggleDropdownFeature();
});
dropdownbtnCompany.addEventListener("click",function (e){
    e.stopPropagation();
    toggleDropdownCompany();
});

document.documentElement.addEventListener("click", function () {
    if (dropdownMenuFeature.classList.contains("show-feature")) {
        toggleDropdownFeature();
    }
    else if(dropdownMenuCompany.classList.contains("show-company")){
        toggleDropdownCompany();
    }
  });