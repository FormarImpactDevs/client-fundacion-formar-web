import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState, useEffect, useContext } from "react";
import { getCategoriesService } from "../../services/categories.service";

import { ProductContext } from "../../context/ProductContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const SidebarFilterProducts = () => {
  const { categoryState, setCategoryState, categoryId, setCategoryId, valueInputSearch, setValueInputSearch } =
    useContext(ProductContext);

  const handleChange = ({ target }) => {
    setCategoryState({
      ...categoryState,
      [target.name]: target.checked,
    });
    if (target.checked) {
      setCategoryId([...categoryId, Number(target.id)]);
    } else {
      let newArray = categoryId.filter((id) => {
        return id !== Number(target.id);
      });
      setCategoryId(newArray);
    }
  };


  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const CategoriesData = await getCategoriesService();
      setCategories(CategoriesData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
 

 const handleInputSearch = ({target}) => {
  setValueInputSearch(target.value)
  console.log(valueInputSearch);
 }

  return (
    <div>
      <Search>
        <SearchIconWrapper type="button">
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={handleInputSearch}
        />
      </Search>

      <Box sx={{ display: "flex" }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Filtrar por</FormLabel>
          <FormGroup>
            {categories.map((category) => (
              <FormControlLabel
                key={category.id}
                control={
                  <Checkbox
                    checked={categoryState.nombre}
                    onChange={handleChange}
                    name={category.nombre}
                    id={category.id}
                  />
                }
                label={category.nombre}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>
    </div>
  );
};
