// src/pages/Calendar.js
import React, { useState, useEffect } from 'react';
import { useUser } from '../UserContext';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Page, Navbar, BlockTitle, List, ListItem, Panel } from 'konsta/react';

const CalendarPage = () => {
  const { user } = useUser();
  const [tasks, setTasks] = useState([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    if (user) {
      const fetchTasks = async () => {
        const q = query(collection(db, 'tasks'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const tasksData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setTasks(tasksData);
      };
      fetchTasks();
    }
  }, [user]);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <Page>
      <Navbar
        title="التقويم"
        right={<button onClick={togglePanel}>قائمة المهام</button>}
        left={<div>{`صباح الخير, ${user ? user.email : 'Guest'}`}</div>}
      />
      <Panel
        side="left"
        opened={isPanelOpen}
        onBackdropClick={togglePanel}
      >
        <Page>
          <Navbar title="قائمة المهام" />
          <BlockTitle>مهامي</BlockTitle>
          <List>
            {tasks.map(task => (
              <ListItem key={task.id} title={task.name} />
            ))}
          </List>
        </Page>
      </Panel>
      <Calendar
        // هنا يمكنك تخصيص التقويم لعرض المهام
      />
    </Page>
  );
};

export default CalendarPage;
