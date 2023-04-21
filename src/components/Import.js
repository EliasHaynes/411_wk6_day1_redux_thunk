import { Container, Button, Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material'
import React, {useState} from 'react'
import { deleteMake } from '../redux/actions'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

    const options = [
        'Delete'
      ];
      const ITEM_HEIGHT = 48;

 const Import = (props) => {
    // fill out this component
    const [theIndex,setIndex] = useState()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    console.log(theIndex)
    
    

      
      



        const handleClose = () => {
          setAnchorEl(null);
        };
    
    return (
        
        <div>
            <h2> Count: {props.makes.length}</h2>
            <button onClick={props.fetchMakes}>Import
            
            </button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.makes.map((make, idx) => (
                    <TableRow key={idx}>
                        <TableCell component="th" scope="row">
                            {make.MakeId}
                        </TableCell>
                        <TableCell>{make["MakeName"]}</TableCell>
                        <TableCell>
                        <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={(event) => {
            setIndex(idx)
            setAnchorEl(event.currentTarget)
        }}
        
      >
        <MoreVertIcon />
      </IconButton>
      </TableCell>
                    </TableRow>
                   
                ))}
                </TableBody>
                
            </Table>
            <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
          <MenuItem  onClick={() => {
            props.deleteMake(theIndex)
            setAnchorEl(null)
        }}
            >
            Delete
          </MenuItem>
      </Menu> 
            <p>Import Component</p>
        </div>
    )
}

export default Import