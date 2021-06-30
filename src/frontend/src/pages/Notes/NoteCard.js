import React, { useState } from "react"
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CircularProgress,
} from "@material-ui/core"
import { useMutation, gql } from "@apollo/client"
import { makeStyles } from "@material-ui/core/styles"

const DELETE_NOTES = gql`
  mutation deleteNote($id: Int!) {
    delete_notes_notes_by_pk(id: $id) {
      id
    }
  }
`

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "5px",
  },
  cardAction: {
    justifyContent: "flex-end",
  },
}))

const NoteCard = (note) => {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)
  const [deleteNote] = useMutation(DELETE_NOTES)
  return (
    <Card
      variant="outlined"
      className={classes.card}
      style={{ backgroundColor: note?.note?.color || "white" }}
    >
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {note?.note?.content}
        </Typography>
      </CardContent>
      <CardActions
        className={classes.cardAction}
        onClick={async () => {
          setLoading(true)
          await deleteNote({
            variables: {
              id: note?.note?.id,
            },
          })
          setLoading(false)
        }}
      >
        <Button>{loading ? <CircularProgress /> : "Delete"}</Button>
      </CardActions>
    </Card>
  )
}

export default NoteCard
