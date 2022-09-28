import React , { useState } from 'react';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';

const filtervalues =[
    {
        id:0,
        name:"Sales"
    },
    {
        id:1,
        name:"Listings"
    },{
        id:2,
        name:"Offers"
    },{
        id:3,
        name:"Collection offers"
    },{
        id:4,
        name:"Transfers"
    },{
        id:5,
        name:"Apple"
    },{
        id:6,
        name:"Pear"
    },{
        id:7,
        name:"Pumpkin"
    },

]
const SideBar = () => {

    const [open, setOpen] = useState([]);

    const handleClick = (val) => () => {
      (open.includes(val))?(setOpen(open => open.filter(item => item != val))):setOpen(open => [...open, val]);
    };

    const [checked, setChecked] = useState([]);

    const handleToggle = (value) => () => {

      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    };


    return(
        <div className='tf-section'>
        <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        >
        <ListItemButton onClick={handleClick(0)}>
            <ListItemText primary="Event Type" className='header-filter'/>
            {open.includes(0) ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse className="sidbar-collapse" in={open.includes(0)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                    <ListItem
                        key={value}
                        secondaryAction={
                        <Checkbox
                            edge="end"
                            onChange={handleToggle(value)}
                            // checked={checked.indexOf(value) !== -1}
                            inputProps={{ 'aria-labelledby': labelId }}
                        />
                        }
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemText id={labelId} primary={filtervalues.filter(item=> item.id === value)[0].name} />
                        </ListItemButton>
                    </ListItem>
                    );
                })}
            </List>
            <Divider />
        </Collapse>
        <ListItemButton onClick={handleClick(1)}>
            <ListItemText primary="Collections" className='header-filter'/>
            {open.includes(1) ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse className="sidbar-collapse" in={open.includes(1)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {[4,5,6].map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                    <ListItem
                        key={value}
                        secondaryAction={
                        <Checkbox
                            edge="end"
                            onChange={handleToggle(value)}
                            // checked={checked.indexOf(value) !== -1}
                            inputProps={{ 'aria-labelledby': labelId }}
                        />
                        }
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemText id={labelId} primary={filtervalues.filter(item=> item.id === value)[0].name} />
                        </ListItemButton>
                    </ListItem>
                    );
                })}
            </List>
            <Divider />
        </Collapse>
        <ListItemButton onClick={handleClick(2)}>
            <ListItemText primary="Chains" className='header-filter'/>
            {open.includes(2) ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse className="sidbar-collapse" in={open.includes(2)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {[7].map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                    <ListItem
                        key={value}
                        secondaryAction={
                        <Checkbox
                            edge="end"
                            onChange={handleToggle(value)}
                            // checked={checked.indexOf(value) !== -1}
                            inputProps={{ 'aria-labelledby': labelId }}
                        />
                        }
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemText id={labelId} primary={filtervalues.filter(item=> item.id === value)[0].name} />
                        </ListItemButton>
                    </ListItem>
                    );
                })}
            </List>
            <Divider />
        </Collapse>
    </List>
        </div>
    )
}

export default SideBar;
