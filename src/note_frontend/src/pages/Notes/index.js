import React, { useState } from "react"
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Paper,
  TextField,
} from "@material-ui/core"
import { useMutation, gql, useQuery, useSubscription } from "@apollo/client"
import { makeStyles } from "@material-ui/core/styles"
import NoteCard from "./NoteCard"
import { Add as AddIcon } from "@material-ui/icons"

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
  addNotes: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  showNotes: {
    width: "100%",
  },
}))

const Notes = () => {
  const classes = useStyles()
  const { data, loading, error } = useSubscription(GET_NOTES)

  const [addNote] = useMutation(ADD_NOTES)
  const [note, setNote] = useState("")
  const [color, setColor] = useState("white")
  if (loading) return "Loading"
  if (error) return "Error"
  return (
    <div className={classes.root}>
      <Grid container className={classes.addNotes}>
        <Grid item xs={12}>
          <Paper fullwidth style={{ backgroundColor: color }}>
            <TextField
              id="outlined-multiline-static"
              label="Pick a color"
              rows={4}
              fullwidth
              value={color}
              variant="outlined"
              onChange={(e) => setColor(e.target.value)}
            />
            <TextField
              id="outlined-multiline-static"
              label="Add Notes"
              multiline
              rows={4}
              fullwidth
              value={note}
              variant="outlined"
              onChange={(e) => setNote(e.target.value)}
            />
            <IconButton
              onClick={() =>
                addNote({
                  variables: {
                    content: note,
                  },
                })
              }
              disabled={!note}
              aria-label="Edit"
              fullwidth
              color="inherit"
            >
              <AddIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
      <Grid container className={classes.showNotes}>
        <Grid item xs={12}>
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
