import Button from "@mui/material/Button";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import styles from "./buttonGoToBack.module.scss";
export const ButtonGoToBack = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Button
      className={styles.arrowGoToBack}
      onClick={handleGoBack}
      variant="outlined"
      startIcon={<KeyboardArrowLeftRoundedIcon />}
      /* style={{"position": "absolute"}} */
    >
      Volver
    </Button>
  );
};
