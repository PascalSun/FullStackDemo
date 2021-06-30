import React from "react"
import {
  amber,
  lime,
  orange,
  red,
  blue,
  purple,
  lightBlue,
  green,
  brown,
  yellow,
} from "@material-ui/core/colors"
import { Menu, MenuItem, Typography } from "@material-ui/core"

const palettes = [
  {
    name: "red",
    color: red[900],
    displayName: "Red",
  },
  {
    name: "purple",
    color: purple[900],
    displayName: "Purple",
  },
  {
    name: "lightBlue",
    color: lightBlue[900],
    displayName: "Light Blue",
  },
  {
    name: "green",
    color: green[900],
    displayName: "Green",
  },
  {
    name: "lime",
    color: lime[900],
    displayName: "Lime",
  },
  {
    name: "orange",
    color: orange[900],
    displayName: "Orange",
  },
  {
    name: "brown",
    color: brown[900],
    displayName: "Brown",
  },
  {
    name: "rainbow",
    color: "#ff9986",
    displayName: "Rainbow",
  },
]
const ColorPicker = ({ open, setColor, setColorPickerOpen }) => {
  return (
    <Menu
      id="color-selector"
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      onClose={() => {
        setColorPickerOpen(false)
      }}
    >
      {palettes.map((palette) => (
        <MenuItem
          key={palette.name}
          onClick={() => setColor(palette?.color || "white")}
        >
          <div
            key={palette?.color || "white"}
            style={{
              width: 5,
              height: 20,
              backgroundColor: palette?.color || "white",
            }}
          />
          <Typography style={{ marginLeft: 5 }}>
            {palette.displayName}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  )
}

export default ColorPicker
