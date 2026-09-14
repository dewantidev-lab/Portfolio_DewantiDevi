// ==============================
// TO-DO LIST
// ==============================

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

if (taskInput && addButton && taskList && emptyMessage) {

    // Mengambil data tugas dari localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Menampilkan semua tugas
    function displayTasks() {

        taskList.innerHTML = "";

        if (tasks.length === 0) {
            emptyMessage.classList.remove("hidden");
            return;
        }

        emptyMessage.classList.add("hidden");

        tasks.forEach(function (task, index) {

            const taskItem = document.createElement("li");

            taskItem.className = `
                flex items-center justify-between
                bg-yellow-50
                border border-pink-100
                rounded-xl
                px-4 py-3
            `;

            taskItem.innerHTML = `
                <span class="task-text ${task.completed ? "line-through text-gray-400" : ""}">
                    ${task.text}
                </span>

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

            taskList.appendChild(taskItem);

            // Tombol selesai
            taskItem.querySelector(".complete-button").addEventListener("click", function () {

                tasks[index].completed = !tasks[index].completed;

                localStorage.setItem("tasks", JSON.stringify(tasks));

                displayTasks();
            });

            // Tombol hapus
            taskItem.querySelector(".delete-button").addEventListener("click", function () {

                tasks.splice(index, 1);

                localStorage.setItem("tasks", JSON.stringify(tasks));

                displayTasks();
            });
        });
    }

    // Fungsi menambahkan tugas
    function addTask() {

        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Silakan masukkan kegiatan terlebih dahulu!");
            return;
        }

        tasks.push({
            text: taskText,
            completed: false
        });

        // Menyimpan tugas ke localStorage
        localStorage.setItem("tasks", JSON.stringify(tasks));

        taskInput.value = "";

        displayTasks();
    }

    // Tombol tambah diklik
    addButton.addEventListener("click", addTask);

    // Menekan Enter
    taskInput.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
            addTask();
        }

    });

    // Menampilkan tugas saat halaman dibuka
    displayTasks();
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