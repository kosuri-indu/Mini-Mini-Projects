function confirmDelete(event) {
    var confirmation = confirm("Are you sure you want to delete this chat?");
    if (!confirmation) {
        event.preventDefault();
    }
}