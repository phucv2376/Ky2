import styles from "../styles/DailyTaskList.module.css";
import AddTaskIcon from "@mui/icons-material/AddTask";

interface Props {
  date: Date;
  setIsTaskModalVisible: Function;
}

const DailyTaskList = (props: Props) => {
  let isCurrent: boolean = false;
  const dateDay = props.date.getDay();
  const curDateDay = new Date().getDay();
  if (dateDay === curDateDay) {
    isCurrent = true;
  }
  return (
    <div
      className={
        isCurrent == true ? styles.taskListCurrentMask : styles.taskListMask
      }>
      <div
        className={
          isCurrent == true ? styles.taskListCurrent : styles.taskList
        }>
        <div className={styles.head}>
          <p>
            {props.date.getDate()} {getDayStr(props.date.getDay())}
          </p>
          {isCurrent == true ? (
            <AddTaskIcon
              className={styles.addButton}
              onClick={() => props.setIsTaskModalVisible(true)}
            />
          ) : (
            ""
          )}
        </div>
        <div className={styles.solid}></div>
      </div>
    </div>
  );
};

export default DailyTaskList;

const getDayStr = (weekDay: number): string => {
  let str: string = "";
  switch (weekDay) {
    case 0:
      str = "𝓢𝓾𝓷𝓭𝓪𝔂";
      break;
    case 1:
      str = "𝓜𝓸𝓷𝓭𝓪𝔂";
      break;
    case 2:
      str = "𝓣𝓾𝓮𝓼𝓭𝓪𝔂";
      break;
    case 3:
      str = "𝓦𝓮𝓭𝓷𝓮𝓼𝓭𝓪𝔂";
      break;
    case 4:
      str = "𝓣𝓱𝓾𝓻𝓼𝓭𝓪𝔂";
      break;
    case 5:
      str = "𝓕𝓻𝓲𝓭𝓪𝔂";
      break;
    case 6:
      str = "𝓢𝓪𝓽𝓾𝓻𝓭𝓪𝔂";
      break;
  }
  return str;
};
