
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import DirectionsIcon from '@mui/icons-material/Directions';

export default function Search() {
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            className="hold-search"
            >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Anything"
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <Image src='/img/search.svg' alt='Search icon' width={16} height={16} />
            </IconButton>
        </Paper>
    )
}