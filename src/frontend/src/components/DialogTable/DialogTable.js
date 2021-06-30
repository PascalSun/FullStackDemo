import React from "react"
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core"

const DialogTable = ({ open, handleClose, title, value }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth={"md"} fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Table size={"small"}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Key</TableCell>
              <TableCell align="center">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {value
              ? Object.entries(value).map((row) => {
                  if (
                    row?.[0].startsWith("__") ||
                    row?.[0].startsWith("assessment_")
                  )
                    return null
                  return (
                    <TableRow key={row?.[0]}>
                      <TableCell align="center">
                        {row?.[0]?.toUpperCase()}
                      </TableCell>
                      <TableCell align="center">
                        {Array.isArray(row?.[1])
                          ? row?.[1].join(",")
                          : row?.[0]?.toUpperCase() !== "DATA_QUALITY"
                          ? row?.[1]
                          : row?.[1] === "DA_G"
                          ? "Good"
                          : "Bad"}
                      </TableCell>
                    </TableRow>
                  )
                })
              : null}
          </TableBody>
        </Table>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogTable
