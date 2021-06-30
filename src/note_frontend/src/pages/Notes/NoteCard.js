import React from "react"
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core"
import { useMutation, gql } from "@apollo/client"
const DELETE_NOTES = gql`
  mutation deleteNote($id: Int!) {
    delete_notes_notes_by_pk(id: $id) {
      id
    }
  }
`
const NoteCard = (note) => {
  const [deleteNote] = useMutation(DELETE_NOTES)
  return (
    <Card>
      <CardContent style={{ backgroundColor: note?.note?.color || "white" }}>
        <Typography variant="body2" color="textSecondary" component="p">
          {note?.note?.content}
        </Typography>
      </CardContent>
      <CardActions
        onClick={() =>
          deleteNote({
            variables: {
              id: note?.note?.id,
            },
          })
        }
      >
        <Button> Delete</Button>
      </CardActions>
    </Card>
  )
}

export default NoteCard
