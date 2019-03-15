function dropdown() {
    document.getElementById("theDropDown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = (e) => {
    if (!e.target.matches('.dropdownbtn')) {
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