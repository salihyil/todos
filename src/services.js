import { db } from "./firebasedata";

import {
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

async function getList() {
  let returnData = [];
  const snapshot = await getDocs(collection(db, "todos"));
  if (snapshot.empty) return [];
  snapshot.forEach((doc) => {
    returnData.push({ ...doc.data() });
  });
  return returnData;
}

async function getItem(id) {
  const docRef = doc(db, "todos", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    //console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    //console.log("No such document!");
    return {};
  }
}

async function addItem(input) {
  try {
    const todosCol = collection(db, "todos");
    const newTodoDocRef = doc(todosCol);
    const returnData = await setDoc(newTodoDocRef, {
      id: newTodoDocRef.id,
      text: input,
      completed: false,
    });

    return returnData;
  } catch (error) {
    return false;
  }
}

async function updateItem(id, data) {
  /* console.log("data", data);
  console.log("id", id); */
  try {
    await updateDoc(doc(db, "todos", id), {
      completed: data.completed,
    });
    return data;
  } catch (error) {
    return false;
  }
}

async function updateTextItem(id, data) {
  console.log("data", data);
  console.log("id", id);
  try {
    await updateDoc(doc(db, "todos", id), {
      text: data.text,
      completed: data.completed,
    });
    return data;
  } catch (error) {
    return false;
  }
}

async function deleteItem(id) {
  try {
    await deleteDoc(doc(db, "todos", id));
  } catch (error) {
    return false;
  }
}

export { getList, addItem, updateItem, deleteItem, updateTextItem, getItem };
