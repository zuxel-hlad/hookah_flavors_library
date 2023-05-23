/* eslint-disable import/no-extraneous-dependencies */
// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getStorage, ref, getDownloadURL, list } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: 'AIzaSyC4_R1XbzYfXJCONzjQHJZ9M0eOZt60G_o',
//     authDomain: 'shop-app-6c9a6.firebaseapp.com',
//     databaseURL: 'https://shop-app-6c9a6-default-rtdb.firebaseio.com',
//     projectId: 'shop-app-6c9a6',
//     storageBucket: 'shop-app-6c9a6.appspot.com',
//     messagingSenderId: '274002318597',
//     appId: '1:274002318597:web:a868e8ddb3f430df0a536c',
// };

// Initialize Firebase
// initializeApp(firebaseConfig);
// Create a reference to the file we want to download
// const storage = getStorage();
// const listRef = ref(storage, 'images');

// const getAllImageUrls = async () => {
//     const res = await list(listRef);
//     const names = res.items.map(item => item.name);

//     const urls = await Promise.all(
//         names.map(async name => getDownloadURL(ref(storage, `images/${name}`)))
//     );

//     return urls;
// };

// export default getAllImageUrls;
