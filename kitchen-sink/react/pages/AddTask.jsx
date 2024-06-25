// src/pages/AddTask.js
import React, { useState } from 'react';
import { useUser } from '../UserContext';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Page, Navbar, List, ListInput, Button } from 'konsta/react';

const AddTask = () => {
  const { user } = useUser();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [emoji, setEmoji] = useState('');

  const handleAddTask = async () => {
    try {
      await addDoc(collection(db, 'tasks'), {
        userId: user.uid,
        name,
        category,
        emoji
      });
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  };

  return (
    <Page>
      <Navbar title="إضافة مهمة جديدة" />
      <List>
        <ListInput
          label="اسم المهمة"
          type="text"
          placeholder="ادخل اسم المهمة"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <ListInput
          label="الفئة"
          type="text"
          placeholder="ادخل الفئة"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <ListInput
          label="رمز"
          type="text"
          placeholder="ادخل رمز"
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
        />
      </List>
      <Button onClick={handleAddTask}>إضافة مهمة</Button>
    </Page>
  );
};

export default AddTask;
