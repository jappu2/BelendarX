// src/pages/TaskDetails.js
import React, { useState } from 'react';
import { Page, Navbar, List, ListInput, Button } from 'konsta/react';

const TaskDetails = ({ task }) => {
  const [duration, setDuration] = useState(0);
  const [rating, setRating] = useState(0);

  const handleSaveDetails = () => {
    // احفظ التفاصيل في قاعدة البيانات
  };

  return (
    <Page>
      <Navbar title={`تفاصيل المهمة: ${task.name}`} />
      <List>
        <ListInput
          label="مدة الأداء (دقائق)"
          type="number"
          placeholder="أدخل المدة"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <ListInput
          label="مدى الرضا (تقييم)"
          type="number"
          placeholder="أدخل تقييم"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </List>
      <Button onClick={handleSaveDetails}>حفظ</Button>
    </Page>
  );
};

export default TaskDetails;
