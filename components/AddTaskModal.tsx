import { useState } from "react";
import styles from "../styles/AddTaskModal.module.css";
import RemoveIcon from "@mui/icons-material/Remove";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import AddTaskIcon from "@mui/icons-material/AddTask";

interface Props {
  setIsTaskModalVisible: Function;
}

const AddTaskModal = (props: Props) => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  return (
    <div className={styles.background}>
      <div className={styles.addTaskContainer}>
        <div className={styles.addTaskHead}>
          <h1 className={styles.header}>𝓐𝓭𝓭 𝓽𝓪𝓼𝓴𝓼..</h1>
          <RemoveIcon
            className={styles.closeIcon}
            onClick={() => props.setIsTaskModalVisible(false)}
          />
        </div>
        <div className={styles.solid}></div>
        <p className={styles.label}>Task:</p>
        <input className={styles.input}></input>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className={styles.dateTimeContainer}>
              <div className={styles.notesContainer}>
                <p className={styles.label}>Date:</p>
                <DatePicker
                  className={styles.dateSelector}
                  autoOk
                  orientation="landscape"
                  variant="static"
                  openTo="date"
                  value={date}
                  onChange={(newDate) => setDate(newDate)}
                />
              </div>
              <div className={styles.notesContainer}>
                <p className={styles.label}>Date:</p>
                <textarea className={styles.notes}></textarea>
              </div>
            </div>
          </LocalizationProvider>
        </MuiPickersUtilsProvider>
        <AddTaskIcon className={styles.addButton} />
      </div>
    </div>
  );
};

export default AddTaskModal;
