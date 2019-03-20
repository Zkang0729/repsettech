var div = document.getElementsByClassName('dropdown');
var icon = document.getElementsByClassName('fa-sort-down');
var open = false;


function dropdown() {
    document.getElementById("theDropDown").classList.toggle("show");
    if (!open) {
        icon[0].classList.toggle("open");
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = (e) => {
    if (!e.target.matches('.dropdownbtn') && !e.target.matches('.fa.fa-sort-down.open')) {
        if (!open) {
            icon[0].classList.remove("open");
        }
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}