// ==============================
// TO-DO LIST
// ==============================

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

if (taskInput && addButton && taskList && emptyMessage) {

    // Fungsi untuk menambahkan tugas
    function addTask() {

        const taskText = taskInput.value.trim();

        // Mengecek apakah input kosong
        if (taskText === "") {
            alert("Silakan masukkan kegiatan terlebih dahulu!");
            return;
        }

        // Membuat elemen li
        const taskItem = document.createElement("li");

        taskItem.className = `
            flex items-center justify-between
            bg-yellow-50
            border border-pink-100
            rounded-xl
            px-4 py-3
        `;

        taskItem.innerHTML = `
            <span class="task-text">${taskText}</span>

            <div class="flex gap-2">
                <button
                    class="complete-button bg-green-400 text-white px-3 py-1 rounded-lg">
                    ✓
                </button>

                <button
                    class="delete-button bg-red-400 text-white px-3 py-1 rounded-lg">
                    ×
                </button>
            </div>
        `;

        // Memasukkan tugas ke dalam daftar
        taskList.appendChild(taskItem);

        // Mengosongkan input
        taskInput.value = "";

        // Menyembunyikan pesan
        emptyMessage.classList.add("hidden");

        // Tombol selesai
        taskItem.querySelector(".complete-button").addEventListener("click", function () {
            taskItem.querySelector(".task-text").classList.toggle("line-through");
            taskItem.querySelector(".task-text").classList.toggle("text-gray-400");
        });

        // Tombol hapus
        taskItem.querySelector(".delete-button").addEventListener("click", function () {
            taskItem.remove();

            if (taskList.children.length === 0) {
                emptyMessage.classList.remove("hidden");
            }
        });
    }

    // Tombol tambah diklik
    addButton.addEventListener("click", addTask);

    // Menekan Enter
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
}


// ==============================
// CONTACT FORM
// ==============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const pesan = document.getElementById("pesan").value.trim();

        // Validasi form
        if (nama === "" || email === "" || pesan === "") {
            alert("Silakan isi semua bagian terlebih dahulu!");
            return;
        }

        // Jika semua sudah diisi
        alert("Pesan berhasil dikirim! Terima kasih, " + nama + " ♡");

        // Mengosongkan form
        contactForm.reset();
    });

}