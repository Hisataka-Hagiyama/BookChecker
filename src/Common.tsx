import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from 'react';
import UnreadList from './UnreadList';
import WishList from './WishList';
import FinishedList from './FinishedList';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


const Common = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        よむよむチェッカー
                    </Typography>
                </Toolbar>
            </AppBar>
            <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" textColor='secondary' variant='fullWidth'>
                <Tab label='欲しい本' />
                <Tab label='積読中' />
                <Tab label='読破' />
            </Tabs>
            <TabPanel value={value} index={0}><WishList /></TabPanel>
            <TabPanel value={value} index={1}><UnreadList /></TabPanel>
            <TabPanel value={value} index={2}><FinishedList /></TabPanel>
        </Box>
    );
}

export default Common;