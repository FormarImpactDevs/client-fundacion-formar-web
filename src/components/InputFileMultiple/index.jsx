import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function InputFileMultiple({
  text,
  name,
  multiple,
  required,
  onChanges,
}) {
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const selectedImages = Array.from(e.target.files).map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));
    setImages(selectedImages);
    onChanges(name, selectedImages.map((image) => image.file));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        minWidth: 300,
        width: "100%",
        justifyContent: "center",
      }}
    >
      <ImageButton
        focusRipple
        style={{
          width: "90%",
        }}
      >
        <ImageSrc style={{ backgroundImage: `url(${images[0]?.url})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            sx={{
              position: "relative",
              p: 4,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
            <Button
              component="label"
              fullWidth
              variant="outline"
              sx={{ mt: 1, mb: 1, color: "secondary.light" }}
            >
              {text}
              <VisuallyHiddenInput
                type="file"
                name={name}
                accept="image/*"
                multiple={multiple}
                required={required}
                onChange={(e) => handleChange(e)}
              />
            </Button>
            <ImageMarked className="MuiImageMarked-root" />
          </Typography>
        </Image>
      </ImageButton>
    </Box>
  );
}

InputFileMultiple.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  multiple: PropTypes.bool,
  required: PropTypes.bool,
  onChanges: PropTypes.func,
};
