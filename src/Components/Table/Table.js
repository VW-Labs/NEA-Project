import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useRowStyles = makeStyles({
  root: {
      borderBottom: "unset"
    }
  }
);

function createData(name, person, month1, month2, month3, month4, month5, month6) {
  return {
    name,
    person,
    month1,
    month2,
    month3,
    month4,
    month5,
    month6,
    children: [
      {
        key: 21,
        name: "Type 1: Drain Cleaning",
        person: "Person 1",
        month1: 88,
        month2: 100,
        month3: 66,
        month4: 55,
        month5: 77,
        month6: 99
      },
      {
        key: 21,
        name: "Type 2: Event Clean",
        person: "Person 2",
        month1: 88,
        month2: 100,
        month3: 66,
        month4: 55,
        month5: 77,
        month6: 99
      }
    ]
  };
}

const CollapsedRow = ({ childrenRow, row }) => {
  const [openFunction, setOpenFunction] = React.useState(false);

  return (
    <>
      <TableRow key={childrenRow.name}>
        <TableCell style={{ width: "62px" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpenFunction(!openFunction)}
          >
            {openFunction ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {childrenRow.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse
            in={openFunction}
            timeout="auto"
            unmountOnExit
          >
            <Box margin={1}>
              <Table size="small">
                <TableHead>
                  
                </TableHead>
                <TableBody>
                  {row.children.map((childrenRow) => (
                    <TableRow key={childrenRow.name}>
                      <TableCell component="th" scope="row">
                        {childrenRow.person}
                      </TableCell>
                      <TableCell component="th" scope="row">{childrenRow.month1}</TableCell>
                      <TableCell>{childrenRow.month2}</TableCell>
                      <TableCell>{childrenRow.month3}</TableCell>
                      <TableCell>{childrenRow.month4}</TableCell>
                      <TableCell>{childrenRow.month5}</TableCell>
                      <TableCell>{childrenRow.month6}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

function Row(props) {
  const { row } = props;
  const [openModule, setOpenModule] = React.useState(false);
  // const [openFunction, setOpenFunction] = React.useState(false);
  // const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  console.log("row", row);
  for (const key in row) {
    if (Object.prototype.hasOwnProperty.call(row, key)) {
      const element = row[key];
      console.log("element", element);
    }
  }
  return (
    <>
      <TableRow className={classes.root} style={{ background: "#389591" }}>
        <TableCell style={{ width: "62px" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpenModule(!openModule)}
            style={{ color: "white" }}
          >
            {openModule ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell style={{ color: "white" }}>{row.name}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={openModule} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.children.map((childrenRow) => (
                    <CollapsedRow
                      row={row}
                      childrenRow={childrenRow}
                    />
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );

}

const rows = [
  // createData({ moduleName :String,  functionName :String,  featureName :String, userTypeList:Array}),
  createData("Region 1: Collins", "Month 1"),
  createData("Region 2: Collins"),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead></TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
