import React, { useState } from "react"
import {
  FormControl,
  IconButton,
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
} from "@material-ui/core"
import { useMutation, gql, useSubscription } from "@apollo/client"
import { makeStyles } from "@material-ui/core/styles"
import NoteCard from "./NoteCard"
import ColorPicker from "./ColorPicker"
import { Add as AddIcon, ColorLens } from "@material-ui/icons"

const GET_NOTES = gql`
  subscription getNotes {
    notes_notes {
      content
      id
      color

      created_on
      updated_at
    }
  }
`

const ADD_NOTES = gql`
  mutation addNotes($content: String, $color: String) {
    insert_notes_notes_one(
      object: {
        content: $content
        created_on: "NOW()"
        updated_at: "NOW()"
        color: $color
      }
    ) {
      id
      content
      color
      created_on
      updated_at
    }
  }
`

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "10px",
  },
  inputForm: {
    width: "100%",
    marginLeft: "auto",
    paddingTop: "5px",
    display: "block",
    marginRight: "auto",
  },
  iconButton: {
    display: "flex",
    backgroundColor: theme.palette.primary.main,
  },
  icon: {
    margin: "auto",
  },
  showNotes: {
    margin: "10px",
  },
}))

const Notes = () => {
  const classes = useStyles()
  const { data, loading, error } = useSubscription(GET_NOTES)

  const [addNote] = useMutation(ADD_NOTES)
  const [note, setNote] = useState("")
  const [color, setColor] = useState("white")
  const [colorPickerOpen, setColorPickerOpen] = useState(false)
  if (loading) return <CircularProgress />
  if (error) return "Error"
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={3} className={classes.showNotes}>
          <Paper fullwidth style={{ backgroundColor: color }}>
            <FormControl>
              <IconButton onClick={() => setColorPickerOpen(!colorPickerOpen)}>
                <ColorLens />
              </IconButton>

              <ColorPicker
                open={colorPickerOpen}
                setColor={setColor}
                setColorPickerOpen={setColorPickerOpen}
              />
            </FormControl>
            {/* <FormControl fullWidth className={classes.inputForm}>
              <TextField
                id="outlined-multiline-static"
                label="Pick a color"
                rows={4}
                fullWidth
                value={color}
                variant="outlined"
                onChange={(e) => setColor(e.target.value)}
              />
            </FormControl> */}
            <FormControl fullWidth className={classes.inputForm}>
              <TextField
                id="outlined-multiline-static"
                label="Add Notes"
                multiline
                rows={4}
                fullWidth
                value={note}
                variant="outlined"
                onChange={(e) => setNote(e.target.value)}
              />
            </FormControl>
            <FormControl
              fullWidth
              className={classes.inputForm}
              style={{ display: "flex" }}
            >
              <Button
                className={classes.iconButton}
                onClick={() =>
                  addNote({
                    variables: {
                      content: note,
                      color: color,
                    },
                  })
                }
                disabled={!note}
                aria-label="Edit"
                variant="outlined"
                fullWidth
              >
                <AddIcon className={classes.icon} />
              </Button>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={8} className={classes.showNotes}>
          {data?.notes_notes?.length
            ? data?.notes_notes.map((note) => (
                <NoteCard note={note} key={note?.id} />
              ))
            : "Please add some notes"}
        </Grid>
      </Grid>
    </div>
  )
}

export default Notes
