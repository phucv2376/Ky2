import { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/toDoList.module.css";
import NavBar from "../components/NavBar";
import DailyTaskList from "../components/DailyTaskList";
import ProgressBar from "../components/ProgressBar";
import { sub, add, isWithinInterval } from "date-fns";
import AddTaskModal from "../components/AddTaskModal";
import { IconProps } from "react-toastify";

interface Task {
  icon: string;
  title: string;
  date: Date;
}
interface DailyTasks {
  prev: Task[];
  cur: Task[];
  tmr: Task[];
  tmrtmr: Task[];
}

const toDoList: NextPage = () => {
  const [isTaskModalVisible, setIsTaskModalVisible] = useState<boolean>(false);
  const [dailyTasks, setDailyTasks] = useState<DailyTasks>({
    prev: [],
    cur: [],
    tmr: [],
    tmrtmr: [],
  });

  let curDate: Date = new Date(); //dailyTasks[1]
  const curDateS1 = sub(curDate, { days: 1 }); //dailyTasks[0]
  const curDateA1 = add(curDate, { days: 1 }); //dailyTasks[1]
  const curDateA2 = add(curDate, { days: 2 }); //dailyTasks[2]
  const dateRange = { start: curDateS1, end: curDateA2 };
  const addTask = (icon: string, title: string, date: Date) => {
    const task: Task = { icon: icon, title: title, date: date };
    //Only change state of dailyTasks if date is one of the 4 days:
    if (isWithinInterval(task.date, dateRange)) {
      const dateOnly: string = task.date.toDateString(); //ignores time
      let day: string = "";
      switch (dateOnly) {
        case curDateS1.toDateString():
          day = "prev";
          break;
        case curDate.toDateString():
          day = "cur";
          break;
        case curDateA1.toDateString():
          day = "tmr";
          break;
        case curDateA2.toDateString():
          day = "tmrtmr";
          break;
      }
      setDailyTasks((prevState) => ({
        ...prevState,
        [day]: [...prevState[day], task],
      }));
    }
    console.log(dailyTasks);
  };

  return (
    <div className={styles.body}>
      <div className={styles.bg}></div>
      <NavBar />
      <div className={styles.toDoContainer}>
        <DailyTaskList
          date={curDateS1}
          setIsTaskModalVisible={setIsTaskModalVisible}
        />
        <DailyTaskList
          date={curDate}
          setIsTaskModalVisible={setIsTaskModalVisible}
        />
        <DailyTaskList
          date={curDateA1}
          setIsTaskModalVisible={setIsTaskModalVisible}
        />
        <DailyTaskList
          date={curDateA2}
          setIsTaskModalVisible={setIsTaskModalVisible}
        />
        <ProgressBar progress={10} height="3vh" />
        {isTaskModalVisible ? (
          <AddTaskModal setIsTaskModalVisible={setIsTaskModalVisible} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default toDoList;
