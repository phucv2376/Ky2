interface Props {
  progress: number;
  height: string;
}

const ProgressBar = (props: Props) => {
  const styles = {
    progressBarContainer: {
      height: props.height,
      width: "98vw",
      backgroundColor: "rgba(255, 188, 181, 0.5)",
      borderRadius: 15,
      margin: "0.5vh",
      marginLeft: "2vh",
    },
    progressBar: {
      height: "100%",
      width: `${props.progress}%`,
      backgroundColor: `${
        props.progress === 100 ? "rgba(75,181,67, 1)" : "rgba(75,181,67, 0.5)"
      }`,
      borderRadius: 15,
      textAlign: "right",
      backdropFilter: "blur(2px)",
      paddingTop: "0.50vh",
      paddingRight: "1vw",
    },
    progressText: {
      color: "white",
      fontWeight: "bolder",
      fontSize: "1.5vh",
      verticalAlign: "middle",
    },
  };

  return (
    <div style={styles.progressBarContainer}>
      <div style={styles.progressBar}>
        <p style={styles.progressText}>{`${props.progress}%`}</p>
      </div>
    </div>
  );
};

export default ProgressBar;
