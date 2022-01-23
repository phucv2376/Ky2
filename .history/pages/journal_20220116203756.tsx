import type { NextPage } from 'next';
import styles from '../styles/Journal.module.css';
import NavBar from '../components/NavBar';
import { HotKeys, configure } from 'react-hotkeys';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Journal: NextPage = () => {
  const options:object = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const today:Date = new Date();

  const handleSubmit = (): void => {
    if (process.browser) {
      const journalLogs = (document.getElementById("journalLogs") as HTMLInputElement).value;
	axios.post("https://ky-api.herokuapp.com/Journals", {
	  date: Date(),
	  contents: journalLogs,
      })
      .then((response) => {
	toast.success('Journal Log Successfully Submitted!', {
	  position: "top-right",
	  autoClose: 3000,
	  hideProgressBar: false,
	  closeOnClick: true,
	  pauseOnHover: true,
	  draggable: true,
	  progress: undefined,
	});
      })
      .catch((error: string) => {
	console.log(error);
	toast.error('ERROR: Journal Log Failed to Submit. Please Check Console.', {
	  position: "top-right",
	  autoClose: 3000,
	  hideProgressBar: false,
	  closeOnClick: true,
	  pauseOnHover: true,
	  draggable: true,
	  progress: undefined,
	});
      });
    };
  }
 
  //ignore hotkey focus
  configure({ignoreTags: ['']});

  const keyMap = {
    SUBMIT: "ctrl+enter"
  }

  const handlers = {
    SUBMIT: () => handleSubmit(),
  }


  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      <div>
				<div className={styles.bg}>
				</div>
				<div>
					<NavBar />
					<h1 className={styles.date}>{today.toLocaleDateString("en-US", options)}</h1>
					<div className={styles.center}>
						<textarea className={styles.logArea} id="journalLogs"></textarea>
					</div>
				</div>
      </div>
      <ToastContainer theme="colored"/>
    </HotKeys>
  )
}

export default Journal;