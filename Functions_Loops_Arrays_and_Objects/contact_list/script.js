const contactForm = document.getElementById('contactForm');
    const contactListDiv = document.getElementById('contactList');
    const editFormDiv = document.getElementById('editForm');
    const editIndexInput = document.getElementById('editIndex');
    const editFirstNameInput = document.getElementById('editFirstName');
    const editLastNameInput = document.getElementById('editLastName');
    const editPhoneNumberInput = document.getElementById('editPhoneNumber');
    const editEmailInput = document.getElementById('editEmail');
    const saveEditButton = document.getElementById('saveEdit');
    const cancelEditButton = document.getElementById('cancelEdit');

    let contacts = [];

    function renderContacts() {
      contactListDiv.innerHTML = contacts.map((contact, index) => `
        <div class="contactItem">
          <span>${contact.firstName} ${contact.lastName} (${contact.phoneNumber}, ${contact.email})</span>
          <div>
            <button onclick="editContact(${index})">Edit</button>
            <button onclick="deleteContact(${index})">Delete</button>
          </div>
        </div>
      `).join('');
    }

    function addContact(event) {
      event.preventDefault();
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const phoneNumber = document.getElementById('phoneNumber').value;
      const email = document.getElementById('email').value;

      contacts.push({ firstName, lastName, phoneNumber, email });
      renderContacts();
      contactForm.reset();
    }

    function editContact(index) {
      const contact = contacts[index];
      editIndexInput.value = index;
      editFirstNameInput.value = contact.firstName;
      editLastNameInput.value = contact.lastName;
      editPhoneNumberInput.value = contact.phoneNumber;
      editEmailInput.value = contact.email;
      editFormDiv.style.display = 'block';
    }

    function saveEdit() {
      const index = parseInt(editIndexInput.value);
      contacts[index] = {
        firstName: editFirstNameInput.value,
        lastName: editLastNameInput.value,
        phoneNumber: editPhoneNumberInput.value,
        email: editEmailInput.value,
      };
      renderContacts();
      editFormDiv.style.display = 'none';
    }

      function cancelEdit() {
        editFormDiv.style.display = 'none';
      }

    function deleteContact(index) {
      contacts.splice(index, 1);
      renderContacts();
    }

    contactForm.addEventListener('submit', addContact);
    saveEditButton.addEventListener('click', saveEdit);
    cancelEditButton.addEventListener('click', cancelEdit);

    renderContacts(); 