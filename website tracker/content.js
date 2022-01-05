
var base_url = window.location.origin
var complete_url = window.location.href
var location_url = window.location.pathname
// alert(base_url)
let roster = [{
    "base_url": complete_url,
    "complete_url": complete_url
}
]
alert(base_url);
alert(complete_url);
// create_database();
// let db = null;
// function create_database() {
//     const request = window.indexedDB.open('MyTestDB');
//     request.onerror = function (event) {
//         alert("cant open db");
//     }
//     request.onupgradeneeded = function (event) {
//         db = event.target.result;
//         let objectStore = db.createObjectStore('roster', {
//             keyPath: complete_url
//         });
//     }
//     request.onsuccess = function (event) {
//         // alert("hi");
//         db = event.target.result;
//         insert_records(roster);
//         db.onerror = function (event) {
//             alert("failed");
//         }
//     }

// }

// function insert_records(records) {
//     // alert("outside");
//     // alert(db);
//     if (db) {
//         alert("insdie");
//         // alert(roster);
//         const insert_transaction = db.transaction("roster", "readwrite");
//         const objectStore = insert_transaction.objectStore("roster");
//         insert_transaction.complete = function () {
//             // alert("done");
//         }
//         insert_transaction.onerror = function () {
//             alert("error");
//         }
//         // alert("niche");
//         roster.forEach(person => {
//             alert(person);
//             let request = objectStore.add(person)
//             request.onsuccess = function () {
//                 alert("added", person);
//             }
//         });

//     }
// }
// function get_records(records) {
//     if (db) {
//         const insert_transaction = db.transactino("roster", "readonly");
//         const objectStore = insert_transaction.objectStore("roster");
//         let request = objectStore.get(email);
//         request.onsuccess = function (event) {
//             console.log(event.target.result);
//         }

//     }
// }